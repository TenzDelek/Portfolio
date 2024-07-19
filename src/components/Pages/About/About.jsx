"use client";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";

import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.01 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
const About = () => {
  const phrase = "I Develop & Design Frontend/Backend";
  const description = useRef(null);
  const isInView = useInView(description, { once: true });
  return (
    <div ref={description} className=" lg:w-[600px] mx-auto text-center  px-2 ">
      <p className=" text-4xl  space-x-4 font-editoriallight pb-5">
        {phrase.split(" ").map((word, index) => {
          return (
            <span
              key={index}
              className=" relative  inline-flex overflow-hidden"
            >
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
                key={index}
              >
                {word}{" "}
              </motion.span>
            </span>
          );
        })}
      </p>
      <div className=" font-light text-justify text-[13px] opacity-60 max-md:text-sm gap-4 flex max-md:flex-col">
        <p className=" flex-1 ">
          My Name is Tenzin Delek,A Tibetan Living in India. have a great
          interest in both the field of Design and Development. My passion
          resonate in both of my academic excellence and the projects that I
          have made till now.{" "}
        </p>
        <p className=" flex-1">
          {" "}
          Driven by self-learning and intrinsic motivation, I have honed my
          abilities and cultivated a strong work ethic. I take pride in my
          ability to independently pursue knowledge and apply it effectively in
          my projects.
        </p>
      </div>
      <Link
                  href="https://tenzindelekdesign.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
  
        <p className=" group border rounded-xl p-2 w-fit m-auto mt-6 flex gap-2 items-center hover:shadow-green-500 transition hover:shadow-md ">
          Design Portfolio
          <span className="relative overflow-hidden h-fit w-fit">
            <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
            <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
          </span>
        </p>
        </Link>
    </div>
    // <div className=" text-left  ">
    //   <p className="font-editorial">HELLO VISITORS,</p>
    //   <p className="mt-4 font-light md:text-base text-sm md:leading-8 leading-7 ">
    //     My Name is Tenzin Delek, A <TextCard name="Tibetan" />Living in India. have a great
    //     interest in both the field of Design and Development. My passion
    //     resonate in both of my academic excellence and the projects that I have
    //     made till now.  <TextCard name="Self Learned" />
    //     Driven by self-learning and intrinsic motivation, I have honed my abilities and cultivated a strong work ethic. I take pride in my ability to independently
    //     pursue knowledge and apply it effectively in my projects. <br/>
    //     Thanks for Stopping by!
    //   </p>
    // </div>
  );
};

export default About;
