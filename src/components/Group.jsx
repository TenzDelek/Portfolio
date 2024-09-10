import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Group = () => {
  const projects = [
    {
      title: "FlashCard Generator",
      desc: "helps generating flashcards based on the given text. It uses the GEMINI API to generate the flashcards.",
      link: "https://flashcardai-xi.vercel.app/",
      code: "https://github.com/TenzDelek/flashcardai",
    },
    {
      title: "CalPage",
      desc: "is a OCR based sum generator. aiming toward the Tibetan Winter Business Seller to calculate their loan faster ",
      link: "https://tibetanwinterocr.vercel.app/",
      code: "https://github.com/TenzDelek/Sumit-OCR-Tool-for-Winter-Business",
    },
    {
      title: "RAGCHATBOT",
      desc: "is a RAG based chatbot that takes context from gdrive file, and uses it to answer questions. ",
      code: "https://github.com/TenzDelek/ratemyprof",
    },
    {
        title: "VITtweet",
        desc: "allows you to share your thoughts with the community of Vellore Institute of Technology. ",
        link: "https://capstone-vitgram-2-0.vercel.app/",
        code: "https://github.com/TenzDelek/Capstone-VITGRAM2.0",
      },
  ];

  return (
    <div>
      {projects.map((item, index) => (
        <div
          key={index}
          className="flex flex-col  max-w-96 items-center mt-4 gap-x-1"
        >
          <p className="font-mainfont">
            <span className="font-extrabold border-b border-[#B3FC03]">
              {item.title}
            </span>{" "}
            {item.desc}
          </p>
          <div className="flex text-[#797979] gap-x-4 mt-2 items-start w-full">
            {item.link && (
              <Link
                className="cursor-pointer group flex items-center"
                href={item.link} target="_blank"
              >
                <p>Live</p>
                <span className="relative overflow-hidden h-fit w-fit text-yellow-500">
                  <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
                  <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
                </span>
              </Link>
            )}

            <Link
              className="cursor-pointer group flex items-center"
              href={item.code} target="_blank"
            >
              <p>Code</p>
              <span className="relative overflow-hidden h-fit w-fit text-yellow-500">
                <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
                <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Group;