"use client";
import { Link } from "react-scroll";
import React from "react";

const Links = () => {
  const lists = [
    {
      title: "About",
    },
    {
      title: "Projects",
    },
    {
      title: "Others",
    },
  ];

  return (
    <div className=" space-x-10 flex">
      {lists.map((item) => (
        <div key={item.title} >
          <Link
            smooth
            duration={500}
            to={item.title}
            className="font-medium  sm:block relative flex overflow-hidden group h-fit text-base "
            href="/about"
          >
            <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
              {item.title}
            </span>
            <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 underline">
              {item.title}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Links;
