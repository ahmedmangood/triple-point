"use client";
import Image from "next/image";
import NextLink from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import LocaleSwitcher from "./localeSwitcher";
import { useEffect } from "react";

function NavBar() {
  const pathName = usePathname();
  const t = useTranslations("NavbarLinks");
  const NavbarLinks = [
    {
      id: 1,
      name: t("home"),
      path: "/",
    },
    {
      id: 2,
      name: t("about"),
      path: "/about",
    },
    {
      id: 3,
      name: t("services"),
      path: "/services",
    },
    {
      id: 4,
      name: t("projects"),
      path: "/projects",
    },
  ];

  useEffect(() => {
    console.log(pathName);
  }, []);
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
            {NavbarLinks.map((link) => {
              return (
                <div key={link.id}>
                  <li className="rtl:pe-4 rtl:ps-4">
                    <NextLink
                      href={link.path}
                      passHref
                      className={`text-white rtl:text-[14px] text-[20px] font-semibold hover:text-gray-400 transition-colors ${
                        pathName === link.path ? "text-gray-400" : ""
                      }`}
                    >
                      {link.name}
                    </NextLink>
                  </li>
                </div>
              );
            })}
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
                    {NavbarLinks.map((link) => {
                      return (
                        <div key={link.id}>
                          <NextLink href={link.path}>
                            <DropdownMenuItem className="cursor-pointer hover:bg-gray-100 border-b-2 border-gray-100">
                              {link.name}
                            </DropdownMenuItem>
                          </NextLink>
                          <DropdownMenuSeparator />
                        </div>
                      );
                    })}
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
                <NextLink href="/contact">{t("contact")}</NextLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
