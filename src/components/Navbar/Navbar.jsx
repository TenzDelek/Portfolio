import React from 'react'
import Links from './Links/Links'
import Image from 'next/image'
import { BsArrowUpRight } from "react-icons/bs";
import Link from 'next/link';
const Navbar = () => {
  return (
      <div>
    <div className='h-24 flex justify-between mt-2 text-sm font-medium items-center'>
        <div className=' relative w-16 h-10 cursor-pointer '>
          <Link href="/"> <Image src="/logo.png" fill /></Link> 
        </div>
        <div className='hidden md:flex'><Links/></div>
        
        <div className=' flex items-center cursor-pointer space-x-1 hover:bg-[#333333] transition rounded-2xl py-2 px-4'>
            <p><a href="/resume.pdf" download>Resume</a></p><BsArrowUpRight />
        </div>
    </div>
    {/* for mobile: no need to create the drop down, all contents are in one page*/}

    </div>
  )
}

export default Navbar