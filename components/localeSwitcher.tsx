"use client";

import { useLocale } from "next-intl";
// import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
// import { useRouter, usePathname } from "next-intl";
import { usePathname, useRouter } from "./navigation";

import Image from "next/image";
function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const pathName = usePathname();
  const onSelecting = (nextLocale: string) => {
    // const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathName, { locale: nextLocale });
    });
  };

  return (
    <>
      <div className="flex items-center justify-center gap-1 space-x-2 ">
        <button
          onClick={() => onSelecting("en")}
          disabled={isPending}
          className={`${
            localeActive === "en"
              ? "border-2 border-gray-300"
              : "bg-transparent"
          } rounded-md p-1`}
        >
          <Image src={"/flags/en.svg"} alt="arabic" width={25} height={25} />
        </button>
        <span>|</span>
        <button
          onClick={() => onSelecting("ar")}
          disabled={isPending}
          className={`${
            localeActive === "ar"
              ? "border-2 border-gray-300"
              : "bg-transparent"
          } rounded-md p-1`}
        >
          <Image src={"/flags/ar.png"} alt="arabic" width={25} height={25} />
        </button>
      </div>
    </>
  );
}

export default LocaleSwitcher;
