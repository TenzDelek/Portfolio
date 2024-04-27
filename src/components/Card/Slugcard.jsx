import Image from "next/image";
import React from "react";

const Slugcard = ({imgt}) => {
  return (
    <div className=" relative mt-2  h-52  lg:w-[560px] md:w-[480px] m-auto">
      <Image src={imgt} alt="slugcard2" fill objectFit="cover" className=" z-20" />
      <div className="h-52 bg-[#999999] animate-pulse -z-10 "/>
    </div>
  );
};

export default Slugcard;
