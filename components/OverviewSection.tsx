import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { PhoneCall } from "lucide-react";

function OverviewSection() {
  const t = useTranslations("OverviewSection");
  return (
    <section className="py-10 my-10 bg-gray-200">
      <div className="container">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-10">
          <div className="w-full lg:w-[50%] flex flex-col items-start justify-center gap-6">
            <h2 className="font-bold text-2xl text-yellowColor">
              {t("headingOne")}
            </h2>
            <p className="text-4xl font-extrabold text-start leading-[60px]">
              {t("headingTwo")}
            </p>
            <span className="text-[18px]">{t("contactSlug")}</span>
            <Button
              asChild
              className="bg-red-500 hover:bg-red-400 hover:no-underline font-bold p-6 shadow-xl mt-5 flex items-center justify-center gap-2"
              variant={"link"}
            >
              <Link
                href={"/contact"}
                className="text-white no-underline text-[17px] ltr:text-[18px]"
              >
                {t("contactBtn")}
                <PhoneCall />
              </Link>
            </Button>
          </div>
          <div className="w-full lg:w-[50%]">
            <Image
              src="/photos/overview.jpg"
              alt="about"
              width={500}
              height={500}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OverviewSection;
