import React from "react";
import { useTranslations } from "next-intl";
import { BsCurrencyDollar } from "react-icons/bs";
import Image from "next/image";

function OverviewSection() {
  const t = useTranslations("OverviewSection");
  const t2 = useTranslations("benefits");
  const benefits = [
    {
      id: 1,
      title: t2("viewOne"),
      description: t2("viewOne-desc"),
      icon: "reputationOne.png",
    },
    {
      id: 2,
      title: t2("viewTwo"),
      description: t2("viewTwo-desc"),
      icon: "innovation.png",
    },
    {
      id: 3,
      title: t2("viewThree"),
      description: t2("viewThree-desc"),
      icon: "reliability.png",
    },
    {
      id: 4,
      title: t2("viewFour"),
      description: t2("viewFour-desc"),
      icon: "satisfaction.png",
    },
    {
      id: 5,
      title: t2("viewFive"),
      description: t2("viewFive-desc"),
      icon: "creativity.png",
    },
  ];
  return (
    <section className="py-10 my-10 ">
      <div className="container">
        <div className="">
          <h2 className="font-bold text-2xl text-yellowColor mb-8">
            {t("headingOne")}
          </h2>
          <p className="text-2xl lg:text-4xl font-extrabold leading-[50px]">
            {t("headingTwo")}
          </p>
        </div>
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {benefits.map((benefit) => {
            return (
              <div
                key={benefit.id}
                className="bg-gray-100 shadow-md  rounded-md flex flex-row-reverse items-start justify-center py-[40px] px-[20px] gap-5 p-4 mb-4 mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-500"
              >
                <div className="w-full flex flex-col items-start justify-center gap-3">
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-[17px] text-gray-600 text-start ">
                    {benefit.description}
                  </p>
                </div>
                <Image
                  src={`/icons/${benefit.icon}`}
                  alt={"icon"}
                  width={70}
                  height={70}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OverviewSection;
