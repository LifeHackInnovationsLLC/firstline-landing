/**
 * Canonical external links to the Firstline app.
 *
 * The marketing landing site (this Next.js repo) is separate from the Firstline
 * app. The app's login/signup lives at its own deployed URL behind the
 * workspace portal's VITE_BASE_PATH. The landing's "Sign in" / "Get Started" /
 * "Start Earning" CTAs must point at the real app login — NOT internal landing
 * routes like /sign-in or /get-started, which do not exist (they 404).
 */
export const APP_LOGIN_URL =
  "https://developers.firstline.digital/firstline-workspace/app/login";

// Get Started / signup currently routes to the same login surface (the app's
// login page exposes signup). If a dedicated signup route is later exposed
// through the portal, repoint APP_SIGNUP_URL here only.
export const APP_SIGNUP_URL = APP_LOGIN_URL;
