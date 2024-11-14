import React from 'react';
import  {RiReactjsLine} from 'react-icons/ri';
import { SiTailwindcss} from 'react-icons/si';
import {SiMongodb} from 'react-icons/si';
import {SiFirebase} from 'react-icons/si';
import {SiFigma} from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiCanva } from 'react-icons/si';
import { motion } from 'framer-motion';

const iconVariants=(duration) =>({
  initial:{y: -10},
  animate:{y: [10, -10],
    transition:{
      duration: duration,
      ease:"linear", 
      repeat:Infinity,
      reapetType:"reverse",
    },
  },
});



const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2
        whileInView={{opacity: 1,y:0}}
        initial={{opacity: 0,y: -100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div
        whileInView={{opacity: 1,x:0}}
        initial={{opacity: 0,x: -100}}
        transition={{duration:1.5}}

      
        className="flex flex-wrap items-center justify-center gap-5">
            <motion.div
              variants={iconVariants(2.5)}
              initial='initial'
              animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-7xl text-cyan-400' />
            </motion.div>
            
            <motion.div
              variants={iconVariants(3)}
              initial='initial'
              animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className='text-7xl text-green-500' />
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial='initial'
              animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiFirebase className='text-7xl text-red-700' />
            </motion.div>
            <motion.div
              variants={iconVariants(2)}
              initial='initial'
              animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiFigma className='text-7xl text-orange-500' />
            </motion.div>
            <motion.div
              variants={iconVariants(6)}
              initial='initial'
              animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTailwindcss className='text-7xl text-cyan-500' />
            </motion.div>
            <motion.div
              variants={iconVariants(4)}
              initial='initial'
              animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiBootstrap className='text-7xl text-purple-800' />
            </motion.div>
            <motion.div
              variants={iconVariants(3)}
              initial='initial'
              animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCanva className='text-7xl text-cyan-600' />
            </motion.div>

        </motion.div>
       
       
     
      
    </div>
  )
}

export default Tech
