'use client'

import { motion } from 'framer-motion'

const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}

const slideUp = {
  initial: { y: 0 },
  exit: { y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}

export default function Preloader() {
  return (
    <motion.div 
      variants={slideUp} 
      initial="initial" 
      exit="exit" 
      className="fixed inset-0 flex items-center justify-center z-50 bg-black"
    >
      <motion.p 
        className='text-white text-4xl'
        variants={opacity} 
        initial="initial" 
        animate="enter"
        exit="exit"
      >
        བཀྲ་ཤིས་བདེ་ལེགས།
      </motion.p>
    </motion.div>
  )
}