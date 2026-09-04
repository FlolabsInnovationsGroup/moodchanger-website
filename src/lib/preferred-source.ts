import { PREFERRED_SOURCE } from "@/lib/site";

/** Auth, account, admin, and HR-style surfaces — no chip, no footer control. */
const PRIVATE_PREFIXES = [
  "/login",
  "/signin",
  "/signup",
  "/auth",
  "/account",
  "/admin",
  "/dashboard",
  "/internships",
  "/internship",
  "/hr",
] as const;

export function isPrivateRoute(pathname: string | null | undefined) {
  if (!pathname) return false;
  return PRIVATE_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export function isPreferredSourceDismissed() {
  try {
    const raw = localStorage.getItem(PREFERRED_SOURCE.storageKey);
    if (!raw) return false;
    const at = Number(raw);
    if (!Number.isFinite(at)) return false;
    return Date.now() - at < PREFERRED_SOURCE.dismissMs;
  } catch {
    return false;
  }
}

export function dismissPreferredSource() {
  try {
    localStorage.setItem(PREFERRED_SOURCE.storageKey, String(Date.now()));
  } catch {
    /* private mode — chip just will not persist the dismiss */
  }
}
