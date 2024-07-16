"use client";
import Biocard from "@/components/Card/Biocard";
import Tech from "@/components/Card/Tech";
import Creative from "@/components/Creative/Creative";
import About from "@/components/Pages/About/About";
import Blog from "@/components/Pages/Blog/Blog";
import Projects from "@/components/Pages/Projects/Projects";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import { useEffect } from "react";
export default function Home() {
 
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="flex flex-col  items-center mt-12">
      <p className=" font-satoshi lg:text-5xl md:text-4xl text-3xl">
        Tenzin Delek
      </p>
      <p className="  font-satoshi lg:text-5xl md:text-4xl text-2xl">
        <span className=" font-editoriallight italic text-gray-600">
          FullStack
        </span>{" "}
        Product{" "}
        Developer
      </p>
      <p className=" text-[#858585]">A Tibetan Based in India</p>
      <div className=" relative mt-4 lg:w-[500px] lg:h-[280px] md:w-[400px] md:h-[250px] w-[300px] h-[230px]">
        <Biocard />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1A1A]  transition-opacity duration-300 opacity-100" />
      </div>
      <div className=" w-full mt-10 p-2 " id="About">
        <About />
        
      </div>

      <div className=" p-2 w-full" id="Projects">
        <Projects domains="Development" />
        {/* <Projects domains="Design"/> */}
        <div className=" mt-4">
          <Creative />
        </div>
      </div>
      <div id="Others">
        <Tech />
      </div>
      <div className=" w-full mt-10 p-2">
        <Blog />
      </div>
    </div>
  );
}

