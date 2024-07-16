
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
const About = () => {
  return (
    <div className=" lg:w-[600px] mx-auto text-center  px-2 ">
      <p className=" text-4xl  font-editoriallight pb-5">
        I Develop & Design Frontend/Backend
      </p>
      <div className=" font-light text-justify text-[13px] opacity-60 max-md:text-sm gap-4 flex max-md:flex-col">
        <p className=" flex-1 ">
          My Name is Tenzin Delek,A Tibetan Living in India. have a great
          interest in both the field of Design and Development. My passion
          resonate in both of my academic excellence and the projects that I
          have made till now.{" "}
        </p>
        <p className=" flex-1"> Driven by self-learning and intrinsic motivation, I have honed my abilities and cultivated a strong work ethic. I take pride in my ability to independently
         pursue knowledge and apply it effectively in my projects.</p>
      </div>
      <a target="_blank" href="https://tenzindelekdesign.vercel.app/"  rel="noopener noreferrer"><p className=" border rounded-xl p-2 w-fit m-auto mt-6 flex gap-2 items-center hover:shadow-green-500 transition hover:shadow-md ">Design Portfolio <span><BsArrowUpRight /></span></p></a>
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
