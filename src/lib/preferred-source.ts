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
