import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function AboutSection() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="w-full lg:w-[50%] flex flex-col items-start justify-center gap-6">
            <h2 className="font-bold text-2xl text-yellowColor">
              ABOUT OUR COMPANY
            </h2>
            <p className="text-4xl font-extrabold text-start leading-[60px]">
              Providing Your Business With A Quality IT Service is Our Passion
            </p>
            <Button
              asChild
              className="bg-blue-500 font-bold hover:bg-blue-400 hover:no-underline"
            >
              <Link href={"#"} className="text-white text-[17px]">
                Learn More
              </Link>
            </Button>
          </div>
          <div className="w-full lg:w-[50%]">
            <Image
              src="/photos/about.jpg"
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

export default AboutSection;
