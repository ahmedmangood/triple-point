import Image from "next/image";
import React from "react";

function OverviewSection() {
  return (
    <section className="bg-gray-200 my-10 py-10">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center">
          <div className="w-[50%]">
            <h6>Why Choose Us?</h6>
            <p>Safeguard Your Brand with Cyber Security and IT Solutions</p>
          </div>
          <div className="w-[50%]">
            <Image
              src={"/photos/overview.jpg"}
              alt="overview"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OverviewSection;
