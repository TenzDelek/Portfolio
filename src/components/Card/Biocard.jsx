import Image from 'next/image'
import React from 'react'
import profile from '../../..//public/prof.jpg'
const Biocard = () => {
    const nums=[2,4,1,0,2,0,0,2,'-',6,5]
  return (
    <div className='  bg-[#292929] flex w-full h-full rounded-xl'>
        <div className=' flex-1  md:flex lg:items-center max-lg:mt-7 hidden justify-center '>
            <div className='relative lg:h-[180px] lg:w-[160px] md:h-[160px]  md:w-[140px]'>
            <Image draggable="false" alt='profile'  className='rounded-xl' src={profile} placeholder='blur' fill/>
            </div>
           
        </div>
        <div className='flex-1 lg:p-4 p-1 mt-4' >
            <p className=' text-sm font-semibold max-md:text-center'>Developer and Designer Info</p>
            <p className='max-md:ml-5'>བསྟན་འཛིན་བདེ་ལེགས་</p>
            <p className=' text-sm mt-2 max-md:ml-5'>Tenzin Delek <span className=' text-xs text-[#858585]'> |  21 years old </span></p>
            <p className=' text-xs mt-2 text-[#858585] max-md:ml-5 '>A Passionate Learner. Strong Suite with Developement and Design</p>
            <div className=' relative  h-[50px] w-[50px] bg-slate-50 mt-2 rounded-lg max-md:ml-5'>
            {/* to put qr code or something */}
            <Image draggable="false" alt='gold code' src="/ggg.png" fill />
            </div>
            <p className=' md:mt-5 text-sm max-md:ml-14 mt-2 max-md:text-xs'>{nums.map((n)=> <span className='tracking-widest' key={n}>{n}&nbsp;&nbsp;</span>)}</p>
        </div>
        </div>
  )
}

export default Biocard