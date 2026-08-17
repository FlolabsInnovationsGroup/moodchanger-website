"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "@/components/icons";
import { themeStore } from "@/lib/theme";

/** Light/dark switch. The current theme is read from `<html data-theme>`. */
export default function ThemeToggle() {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.get,
    themeStore.getServerSnapshot,
  );
  const dark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => themeStore.set(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
    >
      <Moon className="i-moon" />
      <Sun className="i-sun" />
    </button>
  );
}
