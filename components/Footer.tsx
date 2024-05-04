import { mainLinks, projectsLinks, servicesLinks } from "@/context";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  const socialMedia = [
    {
      id: 1,
      icon: <FaFacebookF />,
      link: "https://facebook.com",
    },
    {
      id: 2,
      icon: <FaTwitter />,
      link: "https://twitter.com",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      link: "https://instagram.com",
    },
    {
      id: 4,
      icon: <FaYoutube />,
      link: "https://youtube.com",
    },
  ];
  return (
    <footer>
      <div className="bg-gradient-to-r from-[#053a7f] to-[#002049] mt-10 pt-10 flex flex-col items-center justify-center text-white gap-8 pb-10">
        <section className="container flex items-center justify-center gap-5">
          {socialMedia.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.link}
                className="text-white text-xl bg-[#002049] rounded-full p-3 shadow-sm hover:shadow-[0_1px_5px_0_#000] transition-shadow"
              >
                {item.icon}
              </Link>
            );
          })}
        </section>
        <section className="text-lg">
          We stay at the forefront of global technological trends to transform
          your business processes{" "}
        </section>
        <section className="flex items-start gap-28 flex-wrap">
          <div className="flex flex-col">
            <h4 className="font-bold text-xl mb-3">Company</h4>
            <ul className="flex flex-col items-start justify-center gap-1">
              {mainLinks.map((item) => {
                return (
                  <li key={item.id} className="hover:text-gray-400">
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-xl mb-3">Services</h4>
            <ul className="flex flex-col items-start justify-center gap-1">
              {servicesLinks.map((service) => {
                return (
                  <li key={service.id} className="hover:text-gray-400 ">
                    <Link href={service.path}>{service.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-xl mb-3">Projects</h4>
            <ul className="flex flex-col items-start justify-center gap-1">
              {projectsLinks.map((project) => {
                return (
                  <li key={project.id} className="hover:text-gray-400 ">
                    <Link href={project.path}>{project.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
      <section className="bg-blue-900 text-center text-white py-4">
        © 2023 Copyright: <span className="font-bold">Triple Point</span>
      </section>
    </footer>
  );
}

export default Footer;
