import Link from 'next/link'
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
            <Link href={item.title}  key={item.title}>{item.title}</Link>
            )}
    </div>
  )
}

export default Links