'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <>
      <div className="flex px-7 justify-between items-center h-64">
        <div className="relative h-36 w-24">
          <Image src="/logobig.png" alt="footer image" fill draggable="false" />
        </div>
        <div>
          <div className="items-end flex flex-col space-y-2">
            <p className="text-xs text-[#999999]">Socials</p>
            {handle.map((data, index) => (
              <div
                className={`flex cursor-pointer group gap-2 text-sm ${hovered !== null && hovered !== index ? 'opacity-50' : 'opacity-100'}`}
                key={data.title}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  className="group hover:opacity-100 transition"
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
      <div className="md:text-sm text-xs flex max-md:flex-col max-md:pb-3 pb-0 items-center justify-between px-4">
        <div>
          <div className="flex items-center gap-2">
            <FaRegCopyright />
            <p className="font-medium">2024 Tenzin Delek Portfolio V3. All Right Reserved</p>
          </div>
          <p className="text-[#999999]">Made with Love and Tsampa(50% ButterTea, No Chura)</p>
        </div>
        <div className=" hidden lg:block" >
          <Image src="/3d.png" height={200} width={400} draggable="false" />

          
        </div>
        <div className=" flex gap-4">
        <Link
                  
                  href="https://tenzindelek.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   <pre className=" hover:opacity-75 transition">Portfolio v1</pre>
                  </Link>
                 
                  <Link
                  
                  href="https://tenzindelek.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   <pre className=" hover:opacity-75 transition">Portfolio v2</pre>
                  </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
