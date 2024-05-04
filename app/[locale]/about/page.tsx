import Image from "next/image";
import React from "react";

function About() {
  return (
    <main className="mt-20">
      <h1>About Us</h1>
      <div>
        <Image src={"/photos/about.jpg"} alt="about" height={200} width={200} />
      </div>
    </main>
  );
}

export default About;
