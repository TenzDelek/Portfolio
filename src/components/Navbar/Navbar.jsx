import React from 'react'
import Links from './Links/Links'

const Navbar = () => {
  return (
    <div className=' h-24 flex justify-between mt-4 text-sm font-medium'>
        <div>Image</div>
        <Links/>
        <div>
            Resume
        </div>
    </div>
  )
}

export default Navbar