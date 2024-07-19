import React from "react";
import Links from "./Links/Links";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <div className="h-24 flex justify-between mt-2 text-sm font-medium items-center">
        <div className=" relative w-16 h-10 cursor-pointer ">
          <Link href="/">
            {" "}
            <Image src="/logo.png" alt="nav image" fill />
          </Link>
        </div>
        <div className="hidden md:flex">
          <Links />
        </div>

        <div className="group  flex items-center cursor-pointer space-x-1 hover:bg-[#252525] transition rounded-2xl py-2 px-3">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
          </span>

          <p>
            <a href="/TenzinDelekResume.pdf" download>
              Resume
            </a>
          </p>
          <span className="relative overflow-hidden h-fit w-fit">
                <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
                <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
              </span>
        </div>
      </div>
      {/* for mobile: no need to create the drop down, all contents are in one page*/}
    </div>
  );
};

export default Navbar;
