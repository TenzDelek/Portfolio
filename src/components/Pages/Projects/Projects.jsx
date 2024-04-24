import ProjectCard from '@/components/Card/ProjectCard'
import TextCard from '@/components/TextCard/TextCard'
import React from 'react'
import devdatas from '@/data/Project.json'
import desdatas from '@/data/Design.json'
const Projects = ({domains}) => {
  const data= domains ==="Development"?devdatas:desdatas
  return (
    <div className=' mt-4 flex flex-col'>
    <div className=' flex items-center'>
        <p className=' font-semibold text-lg mr-2 '> Projects</p> 
        <TextCard name={domains} />
    </div>
    <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        {data.map((item)=>
        <div className='' key={item.title}>
             <ProjectCard title={item.title} date={item.date} type={item.type}/>
        </div>
         
       )}
        </div>
    </div>
  )
}

export default Projects