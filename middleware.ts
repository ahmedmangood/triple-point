import createMiddleware from "next-intl/middleware";
import { localePrefix, locales, pathnames } from "./components/navigation";

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
  pathnames,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
