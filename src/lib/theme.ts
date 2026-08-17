export const THEME_KEY = "mc-theme";
export type Theme = "light" | "dark";

/**
 * The theme lives on `<html data-theme>`, written by the blocking script in the
 * root layout before first paint. React subscribes to it as an external store
 * rather than owning it, so there is never a flash of the wrong theme and no
 * hydration mismatch — the server snapshot is the same "light" default the
 * script falls back to.
 */
const listeners = new Set<() => void>();

export const themeStore = {
  subscribe(onChange: () => void) {
    listeners.add(onChange);
    return () => {
      listeners.delete(onChange);
    };
  },
  get(): Theme {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  },
  getServerSnapshot(): Theme {
    return "light";
  },
  set(theme: Theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* private mode — the choice just won't persist */
    }
    listeners.forEach((l) => l());
  },
};
