import TextCard from "@/components/TextCard/TextCard";
import React from "react";

const About = () => {
  return (
    <div className=" text-left  font-bold">
      HELLO VISITORS,
      <p className="mt-4 font-medium md:text-base text-sm md:leading-8 leading-7 ">
        My Name is Tenzin Delek, A <TextCard name="Tibetan" />Living in India. have a great
        interest in both the field of Design and Development. My passion
        resonate in both of my academic excellence and the projects that I have
        made till now.  <TextCard name="Self Learned" />
        Driven by self-learning and intrinsic motivation, I have honed my abilities and cultivated a strong work ethic. I take pride in my ability to independently 
        pursue knowledge and apply it effectively in my projects. <br/>
        Thanks for Stopping by!
      </p>
    </div>
  );
};

export default About;
