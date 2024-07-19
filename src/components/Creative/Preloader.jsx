'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: {duration: 1, delay: 0.2}
    },
}

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}
export default function Preloader() {
   
    const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect( () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

   
   
    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className="h-screen w-screen flex items-center justify-center fixed z-50 bg-black">
            {dimension.width > 0 && 
            <>
                <motion.p className=' flex text-white text-4xl items-center absolute z-10 ' variants={opacity} initial="initial" animate="enter">བཀྲ་ཤིས་བདེ་ལེགས།</motion.p>
                
            </>
            }
        </motion.div>
    )
}
