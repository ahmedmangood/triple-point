"use client";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ImAddressBook } from "react-icons/im";
import { MdCable, MdElectricBolt } from "react-icons/md";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { FaPeopleGroup } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { TbLockAccess } from "react-icons/tb";
import { BiCctv } from "react-icons/bi";
import { VscServerEnvironment } from "react-icons/vsc";
import { RiLightbulbFlashLine } from "react-icons/ri";

function ServicesSection() {
  const t = useTranslations("Services-Section");
  const t2 = useTranslations("Services");
  const pathName = usePathname();
  const servicesList = [
    {
      id: 1,
      title: t2("serviceOne-title"),
      icon: <FaPeopleGroup className="text-[50px] text-[#ff561d] mb-5" />,
      description: t2("serviceOne-desc"),
      path: "#",
    },
    {
      id: 2,
      title: t2("serviceTwo-title"),
      icon: <TbLockAccess className="text-[50px] text-[#ff561d] mb-5 " />,
      description: t2("serviceTwo-desc"),
      path: "#",
    },
    {
      id: 3,
      title: t2("serviceThree-title"),
      icon: <BiCctv className="text-[50px] text-[#ff561d] mb-5" />,
      description: t2("serviceThree-desc"),
      path: "#",
    },
    {
      id: 4,
      title: t2("serviceFour-title"),
      icon: (
        <VscServerEnvironment className="text-[50px] text-[#ff561d] mb-5" />
      ),
      description: t2("serviceFour-desc"),
      path: "#",
    },
    {
      id: 5,
      title: t2("serviceNine-title"),
      icon: (
        <RiLightbulbFlashLine className="text-[50px] text-[#ff561d] mb-5" />
      ),
      description: t2("serviceNine-desc"),
      path: "#",
    },
    {
      id: 6,
      title: t2("serviceTen-title"),
      icon: <MdCable className="text-[50px] text-[#ff561d] mb-5" />,
      description: t2("serviceTen-desc"),
      path: "#",
    },
  ];
  return (
    <section className="container py-[100px]">
      <h2 className="text-center uppercase text-yellowColor font-semibold">
        {t("smallHeader")}
      </h2>
      <div className="mt-5">
        <h1 className="text-center font-bold text-4xl">{t("mainHeader")}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {servicesList.map((service) => {
            return (
              <div
                key={service.id}
                className="bg-white shadow-md hover:shadow-2xl transition-shadow rounded-md flex flex-col items-start justify-center py-[40px] px-[20px] gap-3 p-4 mb-4"
              >
                {/* <MdElectricBolt  /> */}
                {service.icon}
                <h3 className="font-bold text-xl">{service.title}</h3>
                <p className="text-[17px] text-gray-600 text-start">
                  {service.description.length > 105
                    ? service.description.slice(0, 105) + "..."
                    : service.description}
                </p>
                <Link
                  href={service.path}
                  className="text-purple-500 capitalize font-semibold underline flex items-center justify-center gap-1 hover:ps-1 transition-all"
                >
                  {pathName === "/" ? <ArrowBigRight /> : <ArrowBigLeft />}
                  <span>{t("readMore")}</span>
                </Link>
              </div>
            );
          })}
        </div>
        <Button
          asChild
          className="bg-blue-500 hover:bg-blue-400 hover:no-underline font-bold p-6 shadow-xl mt-5"
          variant={"link"}
        >
          <Link
            href={"/services"}
            className="text-white no-underline text-[17px]"
          >
            {t("AllServices")}
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default ServicesSection;
