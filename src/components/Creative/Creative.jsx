'use client'
import { useScroll, useTransform,motion  } from 'framer-motion';
import React, { useRef } from 'react'
import Picture1 from '../../../public/logor.png'
import Picture3 from '../../../public/ps.png'
import Picture2 from "../../../public/spor.png"
import Image from 'next/image';
const Creative = () => {
    const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end start']
    })
  return (
    <main className="overflow-hidden">
      <div/>
      <div ref={container}>
        <Slide src={Picture1} texts={'Creative Developer'} direction={'left'} left={"-40%"} progress={scrollYProgress}/>
        <Slide src={Picture2} texts={'Frontend Developer'} direction={'right'} left={"-25%"} progress={scrollYProgress}/>
        <Slide src={Picture3} texts={'UI/UX Designer / 3D'} direction={'left'}  left={"-75%"} progress={scrollYProgress}/>
      </div>
    </main>
  )
}

export default Creative
const Slide = (props) => {
    const direction = props.direction == 'left' ? -1 : 1;
    const translateX = useTransform(props.progress, [0, 1], [200 * direction, -150 * direction])
    return (
      <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
        <Phrase src={props.src} texts={props.texts}/>
        <Phrase src={props.src} texts={props.texts}/>
        <Phrase src={props.src} texts={props.texts}/>
      </motion.div>
    )
  }
const Phrase = ({src,texts}) => {

    return (
      <div className={'px-5 flex gap-5 items-center'}>
        <p className='text-[3vw] max-md:text-[4vw]'>{texts}</p>
        <span className="relative max-md:h-[4vw] h-[3vw] aspect-[4/2] rounded-full overflow-hidden">
          <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>
        </span>
      </div>
    )
  }