import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "ar"] as const;
export const localePrefix = "always"; // Default
// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  "/": "/",
  // If locales use different paths, you can
  // specify each external path per locale.
  "/about": "/about",
  "/contact": "/contact",
  "/services": "/services",
  "/projects": "/projects",
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
