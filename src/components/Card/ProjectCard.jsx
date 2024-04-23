import React from 'react'

const ProjectCard = ({date,type,title}) => {
  return (
    <div className=' p-2 w-full md:hover:bg-[#1A1A1A] hover:bg-[#292929] transition'>
        <div className={`relative hidden md:flex  bg-[#606060] h-44 rounded-sm w-56 `}>
            {/* for image */}
        </div>
        <div className=' flex justify-between items-center'>
        <p className=' text-sm font-semibold mt-2'>{title}</p> 
        <p className=' text-xs font-medium text-[#858585] mt-2'> {date}</p>
        </div>
       
        <p className=' text-xs font-medium text-[#858585]'>{type}</p>
        </div>
  )
}

export default ProjectCard