import Image from 'next/image'
import React from 'react'
import TextCard from '../TextCard/TextCard'

const Tech = () => {
  return (
    <div className='flex w-full h-full rounded-xl'>
        <div className='flex flex-col lg:p-4 p-1 mt-4' >
            <p className=' text-lg  px-2 font-semibold max-md:text-center'>TechStack Info</p>
            <p className='max-md:ml-5 text-sm px-2'>Development</p>
            <p className=' flex lg:flex-nowrap flex-wrap px-2 gap-y-2 text-sm mt-2 max-md:ml-5'>
            <TextCard name="Nextjs14"/>
            <TextCard name="React"/>
            <TextCard name="Supabase"/>
            <TextCard name="NextAuth"/>
            <TextCard name="MongoDB"/>
            <TextCard name="TailwindCSS"/>
            </p>

            <p className='max-md:ml-5 text-sm mt-2 px-2'>Design</p>
            <p className=' flex flex-wrap px-2 gap-2 text-sm mt-2 max-md:ml-5'>
            <TextCard name="Figma"/>
            <TextCard name="Blender"/>
            <TextCard name="Adobe Suite"/>
            </p>
        </div>
        </div>
  )
}

export default Tech