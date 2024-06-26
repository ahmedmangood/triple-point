import React from "react";
import { Button } from "./ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

function Banner() {
  const t = useTranslations("banner");
  return (
    <section className="py-10 my-10 bg-[url('/photos/banner.png')] saturate-200 bg-no-repeat bg-center bg-cover  h-[500px] relative">
      <div className="bg-[#0000009f] h-full w-full flex flex-col items-center justify-center gap-10 text-center text-white font-bold top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute">
        <h2 className="text-xl uppercase">{t("headingOne")}</h2>
        <p className="text-2xl lg:text-5xl">{t("headingTwo")}</p>
        <div className="flex items-center justify-center gap-3">
          <Button
            asChild
            variant={"link"}
            className="bg-black text-white p-6 text-[16px] no-underline hover:no-underline font-bold border-[1px] border-gray-300 hover:bg-[#1c1c1cd5] transition-colors"
          >
            <Link
              href={"tel:+201092518890"}
              className="no-underline hover:no-underline font-bold"
            >
              {t("callBtn")}
              <PhoneCall className="ps-2" />
            </Link>
          </Button>
          <Button
            asChild
            variant={"link"}
            className="bg-white text-black p-6 text-[16px] no-underline hover:no-underline font-bold border-[1px] border-gray-300 hover:bg-[#b8b8b8a0] transition-colors"
          >
            <Link
              href={"#"}
              className="no-underline hover:no-underline font-bold"
            >
              {t("contactBtn")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
