"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

function Hero() {
  const t = useTranslations("Hero");
  const t2 = useTranslations("NavbarLinks");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <section className="bg-[url('/photos/hero2.jpg')] saturate-200 bg-no-repeat bg-center bg-cover h-screen relative">
      <div className="text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full  p-10 bg-gradient-to-r from-[#091e397c] to-[#002049c0] h-full flex items-center justify-center">
        <div
          className={`px-3 md:px-6 lg:px-40 overflow-hidden opacity-0 ${
            isLoaded ? "transition-opacity duration-1000 opacity-[1]" : ""
          }`}
        >
          <h1 className="text-[24px] lg:text-[30px] text-center md:text-[50px] font-bold uppercase ">
            {t("welcome")}{" "}
            <span className="bg-gradient-to-r from-green-200  to-red-300 via-blue-300 inline-block text-transparent bg-clip-text">
              {t2("logoTitle")}
            </span>
          </h1>
          <div className="flex-col flex items-center justify-center gap-2 mt-4">
            <p className="text-xl lg:text-3xl font-semibold">{t("slug")}</p>
            <p className="text-xl lg:text-3xl font-semibold">
              {t("paragraph")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
