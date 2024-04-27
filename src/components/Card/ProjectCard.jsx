import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProjectCard = ({ date, type, title, imgs ,slugs}) => {
 
  return (
    <Link href={`/${slugs}`}>
    <div className=" p-2 w-full md:hover:bg-[#1A1A1A] hover:bg-[#292929] transition">
      <div
        className={`relative hidden md:flex h-44 rounded-sm w-56 `}
      >
        {/* for image */}
      <Image src={imgs} alt="slugcard" className=" z-10" fill />
      </div>
      <div className=" flex justify-between items-center">
        <p className=" text-sm font-semibold mt-2">{title}</p>
        <p className=" text-xs font-medium text-[#858585] mt-2"> {date}</p>
      </div>

      <p className=" text-xs font-medium text-[#858585]">{type}</p>
    </div>

    </Link>
  );
};

export default ProjectCard;
