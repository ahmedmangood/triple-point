import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-600 mt-10 pt-10">
      <div>
        <Image src={"/logo.png"} alt={"Logo"} width={25} height={25} />
        <h1>Triple Point</h1>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;
