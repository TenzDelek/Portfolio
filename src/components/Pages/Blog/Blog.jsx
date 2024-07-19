import TextCard from "@/components/TextCard/TextCard";
import Link from "next/link";
import React from "react";

const staticinfo = [
  {
    title:
      " What I learn from playing Clash of Clan for 6 years as a Developer",
    sub: " This is a lesson from my experience from playing clash of clan for almost 6 years and how it helped me in my development journey",
    links:
      "https://medium.com/@tibetdelek/what-7-year-of-clash-of-clan-taught-me-as-a-developer-e5e9c2566c1b",
  },
  {
    title:
      " Creating Your first Simple Fullstack Website: A icebreaker into API,CORS and Proxy",
    sub: " ever got scare when the word fullstack comes in , whether it be from your senior or some youtubers, fullstack..",
    links:
      "https://medium.com/@tibetdelek/creating-your-first-simple-fullstack-website-a-icebreaker-into-api-cors-and-proxy-3a738f392a57",
  },
  {
    title: "Foward Ref : an underrated Hook in react",
    sub: " In React, the forwardRef function is used to forward a ref from a child component to aDOM element or a component that is deeper in the component tree.",
    links:
      "https://medium.com/@tibetdelek/foward-ref-an-underrated-hook-in-react-6b73e8b30a32",
  },
  {
    title: "The Actual Way of Learning: Through tutorial hell and Burn out",
    sub: " you see many people use the word tutorial hell as a depressing state of activity where a learner like you is stuck in this endless loop of learning..",
    links:
      "https://medium.com/@tibetdelek/the-actual-way-of-learning-through-tutorial-hell-and-burn-out-94fcfe7faca2",
  },
  {
    title: "Context API: The Harder Approach",
    sub: "ever heard about prop drilling or redux, or even specifically context API. if you do then great man but if you felt like nah i am lost here. ",
    links:
      "https://medium.com/@tibetdelek/context-api-the-harder-approach-31b311af5dc8",
  },
];
const Blog = () => {
  return (
    <div className=" text-leftfont-bold">
      Blogs
      {staticinfo.map((item, index) => (
        <div key={index}>
          <p className="mt-4 hover:text-[#999999] transition font-semibold md:text-base text-sm md:leading-6 leading-4 ">
            <Link
              className="group hover:opacity-75 transition"
              href={item.links}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}{" "}
            </Link>
          </p>
          <p className=" text-[#999999] font-medium text-xs">{item.sub}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
