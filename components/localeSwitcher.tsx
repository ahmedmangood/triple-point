"use client";

import { useLocale } from "next-intl";
// import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { useRouter, usePathname } from "next-intl/client";
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
      {/* <select
        defaultValue={localeActive}
        onChange={onSelecting}
        disabled={isPending}
        className="bg-transparent rounded-md border-2 border-gray-400 p-1"
      >
        <option value="ar" className="text-black">
          اللغة العربية
        </option>

        <option value="en" className="text-black">
          English
        </option>
      </select> */}
      <div className="flex items-center justify-center gap-1 space-x-2 ">
        <button
          onClick={() => onSelecting("en")}
          disabled={isPending}
          className={`${
            localeActive === "en" ? "bg-gray-300" : "bg-transparent"
          } rounded-md p-1`}
        >
          <Image src={"/flags/en.svg"} alt="arabic" width={25} height={25} />
        </button>
        <span>|</span>
        <button
          onClick={() => onSelecting("ar")}
          disabled={isPending}
          className={`${
            localeActive === "ar" ? "bg-gray-300" : "bg-transparent"
          } rounded-md p-1 font-extrabold`}
        >
          <Image src={"/flags/ar.png"} alt="arabic" width={25} height={25} />
        </button>
      </div>
    </>
  );
}

export default LocaleSwitcher;
