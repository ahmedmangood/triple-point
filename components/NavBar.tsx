"use client";
import Image from "next/image";
import NextLink from "next/link";
import { useTranslations } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import LocaleSwitcher from "./localeSwitcher";
import { Link, usePathname } from "./navigation";

function NavBar() {
  const currentPathName = usePathname();
  const t = useTranslations("NavbarLinks");
  return (
    <nav className=" text-white fixed w-full top-[0px] z-10 bg-gradient-to-r from-[#053a7f] to-[#002049] shadow-2xl border-b-2 border-gray-300 ">
      <div className="container">
        <div className="flex justify-between items-center h-20">
          <NextLink
            href={"/"}
            className="flex items-center space-x-2 rtl:flex-col"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="p-1 invert-[1]"
            />
            <h3 className="font-bold text-white text-[20px] rtl:text-[19px]">
              {t("logoTitle")}
            </h3>
          </NextLink>
          <ul className="hidden lg:flex items-center justify-center ltr:space-x-10">
            <li className="rtl:pe-4 rtl:ps-4">
              <Link
                href={"/"}
                className={`text-white rtl:text-[14px] text-[20px] font-semibold hover:text-gray-400 transition-colors ${
                  currentPathName === "/" ? "text-gray-500" : ""
                }`}
              >
                {t("home")}
              </Link>
            </li>
            <li className="rtl:pe-4 rtl:ps-4">
              <Link
                href={"/about"}
                className={`text-white rtl:text-[14px] text-[20px] font-semibold hover:text-gray-400 transition-colors ${
                  currentPathName === "/about" ? "text-gray-500" : ""
                }`}
              >
                {t("about")}
              </Link>
            </li>
            <li className="rtl:pe-4 rtl:ps-4">
              <Link
                href={"/services"}
                className={`text-white rtl:text-[14px] text-[20px] font-semibold hover:text-gray-400 transition-colors ${
                  currentPathName === "/services" ? "text-gray-500" : ""
                }`}
              >
                {t("services")}
              </Link>
            </li>
            <li className="rtl:pe-4 rtl:ps-4">
              <Link
                href={"/projects"}
                className={`text-white rtl:text-[14px] text-[20px] font-semibold hover:text-gray-400 transition-colors ${
                  currentPathName === "/projects" ? "text-gray-500" : ""
                }`}
              >
                {t("projects")}
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-center">
            {/* Start DropDown Menu */}
            <div className="flex items-center justify-center ltr:space-x-5 rtl:gap-2">
              <div className="block lg:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Image
                      src={"/icons/burgerMenu.svg"}
                      alt="Menu Icon"
                      width={30}
                      height={30}
                      className=" invert-[1] hover:invert-[.30] transition-all"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white">
                    <Link href={"/"}>
                      <DropdownMenuItem
                        className={`cursor-pointer hover:bg-gray-100 border-b-2 border-gray-100 ${
                          currentPathName === "/" ? "bg-gray-200" : ""
                        }`}
                      >
                        {t("home")}
                      </DropdownMenuItem>
                    </Link>
                    <Link href={"/about"}>
                      <DropdownMenuItem
                        className={`cursor-pointer hover:bg-gray-100 border-b-2 border-gray-100 ${
                          currentPathName === "/about" ? "bg-gray-200" : ""
                        }`}
                      >
                        {t("about")}
                      </DropdownMenuItem>
                    </Link>
                    <Link href={"/services"}>
                      <DropdownMenuItem
                        className={`cursor-pointer hover:bg-gray-100 border-b-2 border-gray-100 ${
                          currentPathName === "/services" ? "bg-gray-200" : ""
                        }`}
                      >
                        {t("services")}
                      </DropdownMenuItem>
                    </Link>
                    <Link href={"/projects"}>
                      <DropdownMenuItem
                        className={`cursor-pointer hover:bg-gray-100 border-b-2 border-gray-100 ${
                          currentPathName === "/projects" ? "bg-gray-200" : ""
                        }`}
                      >
                        {t("projects")}
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="block lg:hidden">
                <LocaleSwitcher />
              </div>
            </div>
            {/* End DropDown Menu */}
            <div className="flex items-center justify-center space-x-5 ">
              <div className="lg:block hidden">
                <LocaleSwitcher />
              </div>
              <Button
                asChild
                className="hidden lg:flex bg-red-600 hover:bg-red-400 text-[17px] font-semibold"
              >
                <Link href="/contact">{t("contact")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
