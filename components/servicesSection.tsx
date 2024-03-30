import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ImAddressBook } from "react-icons/im";
import { MdElectricBolt } from "react-icons/md";
import { Button } from "./ui/button";

function ServicesSection() {
  const servicesList = [
    {
      id: 1,
      title: "Electric Works",
      icon: <ImAddressBook className="text-[50px] text-[#ff561d] mb-5" />,
      description: "Electric Works",
      path: "/services/electricworks",
    },
    {
      id: 2,
      title: "Power Generation",
      icon: <MdElectricBolt className="text-[50px] text-[#ff561d] mb-5" />,
      description: "Power Generation",
      path: "/services/powergeneration",
    },
    {
      id: 3,
      title: "Power Distribution",
      icon: <MdElectricBolt className="text-[50px] text-[#ff561d] mb-5" />,
      description: "Power Distribution",
      path: "/services/powerdistribution",
    },
    {
      id: 4,
      title: "Power Management",
      icon: <MdElectricBolt className="text-[50px] text-[#ff561d] mb-5" />,
      description: "Power Management",
      path: "/services/powermanagement",
    },
  ];
  return (
    <section className="container py-[100px]">
      <h2 className="text-center uppercase text-[#ff9800] font-semibold">
        what we provide
      </h2>
      <div className="mt-5">
        <h1 className="text-center font-bold text-4xl">Our Services</h1>
        <div className="flex flex-row flex-wrap items-center justify-between mt-5">
          {servicesList.map((service) => {
            return (
              <div
                key={service.id}
                className="bg-white shadow-md hover:shadow-2xl transition-shadow rounded-md flex flex-col items-start justify-center py-[40px] px-[20px] gap-3 w-[400px] my-5"
              >
                {/* <MdElectricBolt  /> */}
                {service.icon}
                <h3 className="font-bold text-xl">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
                <Link
                  href={service.path}
                  className="text-blue-500 underline flex items-center justify-center gap-1 hover:ps-1 transition-all"
                >
                  <ArrowBigRight />
                  <span>read more</span>
                </Link>
              </div>
            );
          })}
        </div>
        <Button
          asChild
          className="bg-blue-500 hover:bg-blue-400 hover:no-underline"
          variant={"link"}
        >
          <Link href={"/services"} className="text-white no-underline">
            Show More
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default ServicesSection;
