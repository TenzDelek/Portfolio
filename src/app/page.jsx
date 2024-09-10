import React from "react";
import Hero from "@/components/Hero";
import { GoArrowUpRight } from "react-icons/go";
import Group from "@/components/Group";
import Link from "next/link";

//text-[#B3FC03]
const Home = () => {
  const links = [
    {
      title: "Github",
      link: "https://github.com/TenzDelek",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/tenzin-delek-8a157724b/",
    },
    {
      title: "LeetCode",
      link: "https://leetcode.com/u/TenzinDelek/",
    },
  ];
  return (
    <div className="flex md:flex-row flex-col">
      <div className="flex-1 text-sm">
        <Hero />
        <div className="font-mainfont md:px-20 px-10 md:mt-20 mt-10">
          <p className=" font-mediummainfont">Tenzin Delek</p>
          <div>
            <p className=" text-[#797979] ">Design Engineer / 3D Designer </p>
          </div>
          <div className=" mt-3 font-mainfont text-sm text-wrap">
            Developing and Designing website that inspires.
            <br />A learner, A Believer and A Pushover
          </div>
          <div className="group w-fit cursor-zoom-out  flex items-center gap-x-1 mt-5 text-[#797979]">
            <p className="font-mediummainfont">Projects</p>
            <span className="relative overflow-hidden h-fit w-fit">
              <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
              <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
            </span>
          </div>
          <Group />
          <div></div>
        </div>
        <div></div>
      </div>
      <div className="flex-1  text-sm text-end">
        <div className="flex  items-end   flex-col max-sm:items-center max-sm:justify-center  font-mainfont md:px-20 px-10 md:mt-20 mt-10">
          <p>© 2024 Tenzin Delek</p>
          <div className="flex    w-fit gap-x-3 md:block">
            {links.map((item, index) => (
              <Link
                className=" text-sm  sm:block relative  overflow-hidden group h-fit  "
                href={item.link}
                key={index}
                target="_blank"
              >
                <span className="flex flex-col group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
                  {item.title}
                </span>
                <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 ">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
