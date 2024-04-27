import Image from "next/image";
import React from "react";

const Slugcard = ({imgt}) => {
  return (
    <div className=" relative mt-2  h-52  lg:w-[560px] md:w-[480px] m-auto">
      <Image src={imgt} fill objectFit="cover" />
    </div>
  );
};

export default Slugcard;
