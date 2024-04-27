'use client'
import { Link } from "react-scroll";
import React from 'react'

const Links = () => {
    const lists= [
        {
            title: "About"
        },
        {
            title: "Projects"
        },
        {
            title: "Others"
        }
    ]
    
  return (
    <div className=' space-x-10'>
        {lists.map((item)=>
            <Link to={item.title} className=" cursor-pointer" smooth duration={500}  key={item.title}>{item.title}</Link>
            )}
    </div>
  )
}

export default Links