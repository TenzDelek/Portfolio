import TextCard from "@/components/TextCard/TextCard";
import React from "react";

const staticinfo = [
  {
    title: " What I learn from playing Clash of Clan for 6 years",
    sub: " This is a lesson from my experience from playing clash of clan for almost 6 years and how it helped me in my development journey",
    links: "/",
  },
  {
    title:
      " Creating Your first Simple Fullstack Website: A icebreaker into API,CORS and Proxy",
    sub: " ever got scare when the word fullstack comes in , whether it be from your senior or some youtubers, fullstack..",
    links: "/",
  },
  {
    title: "Foward Ref : an underrated Hook in react",
    sub: " In React, the forwardRef function is used to forward a ref from a child component to aDOM element or a component that is deeper in the component tree.",
    links: "/",
  },
  {
    title: "The Actual Way of Learning: Through tutorial hell and Burn out",
    sub: " you see many people use the word tutorial hell as a depressing state of activity where a learner like you is stuck in this endless loop of learning..",
    links: "/",
  },
];
const Blog = () => {
  return (
    <div className=" text-leftfont-bold">
      Blogs
      {staticinfo.map((item) => (
        <div key={item.title}>
          <p className="mt-4 font-semibold md:text-base text-sm md:leading-6 leading-4 ">
            {item.title} </p>
            <p className=" text-[#999999] font-medium text-xs">{item.sub}</p>
         
        </div>
      ))}
    </div>
  );
};

export default Blog;
