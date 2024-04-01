import "../globals.css";
import "aos/dist/aos.css";

import type { Metadata } from "next";
import { Dosis, Noto_Kufi_Arabic, Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import AousAnimation from "@/components/aosAnimation";
import NextTopLoader from "nextjs-toploader";
import NavBar from "@/components/NavBar";

// const poppins = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-poppins",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
//   style: "normal",
//   preload: true,
// });

const dosis = Dosis({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dosis",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: "normal",
  preload: true,
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-noto-kufi-arabic",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: "normal",
  preload: true,
});

export const metadata: Metadata = {
  title: "Delta Med",
  description:
    "Delta Med Global Contracting - A Self-Performing General Contractor Focused on Highly Complex and Technical Projects ",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html
      className={locale === "ar" ? notoKufiArabic.className : dosis.className}
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextTopLoader showSpinner={false} color="green" />
          <header>
            <NavBar />
          </header>
          <AousAnimation>{children}</AousAnimation>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
