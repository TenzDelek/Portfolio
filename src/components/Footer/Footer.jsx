import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaRegCopyright } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
const handle = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/tenzin-delek-8a157724b/",
  },
  {
    title: "GitHub",
    link: "https://github.com/TenzDelek",
  },
  {
    title: "LeetCode",
    link: "https://leetcode.com/u/TenzinDelek/",
  },
  {
    title: "Medium",
    link: "https://medium.com/@tibetdelek",
  },
];
const Footer = () => {
  const links = [
    {
      id: 1,
      href: "/about",
      label: "About",
    },
    {
      id: 2,
      href: "https://forms.gle/PftXkai3sNZquWu68",
      label: "Add a resource",
    },
    {
      id: 3,
      href: "https://forms.gle/s84TNQcUX1P22bTE7",
      label: "Submit feedback",
    },
    {
      id: 4,
      href: "https://ko-fi.com/supporthuyng",
      label: "Support this project",
    },
    {
      id: 5,
      href: "https://github.com/huyngxyz/Pillarstack",
      label: "Contribute on Github",
    },
    {
      id: 6,
      href: "/legal",
      label: "Legal",
    },
  ];
  return (
    <>
      <div className=" flex justify-between items-center h-64">
        <div className=" relative h-36  w-24">
          <Image src="/logobig.png" alt="footer image" fill draggable="false" />
        </div>
        <div>
          <div className=" items-end flex flex-col space-y-2">
            <p className=" text-xs text-[#999999]">Socials</p>
            {handle.map((data) => (
              <div className="flex cursor-pointer group  gap-2 text-sm" key={data.title}>
              
              <Link
                  className="group hover:opacity-75 transition"
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.title}
                  </Link>
              <span className="relative overflow-hidden h-fit w-fit">
                <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
                <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
              </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" md:text-sm text-xs">
        <div className="flex  items-center gap-2 ">
        <FaRegCopyright />
        <p className=" font-medium">2024 Tenzin Delek. All Right Reserved</p>
        </div>
        <p className="text-[#999999]">Made with Love and Tsampa(50% ButterTea, No Chura)</p>
      </div>
     
    </>
  );
};

export default Footer;
