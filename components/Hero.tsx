import { useTranslations } from "next-intl";

function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="bg-[url('/photos/hero2.jpg')] saturate-200 bg-no-repeat bg-center bg-cover h-screen relative">
      <div className="text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
        <div className="m-auto p-10 bg-gradient-to-r from-[#091e397c] to-[#002049c0]">
          <h1 data-aos="zoom-in-up" className="text-[50px] font-bold">
            Driving Business Transformation
          </h1>
          <p data-aos="zoom-in-up" className="text-2xl">
            IT consulting and integrated services
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
