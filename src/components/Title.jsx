import React from 'react'
import { motion } from 'framer-motion'

const Title = ({title, desc}) => {
  return (
    <>
      <div className='relative inline-block group p-2'>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{duration: 0.6}}
          viewport={{ once: true }}
          className='text-3xl sm:text-5xl font-medium text-gray-700 dark:text-white'>
            {title}
            <span className='absolute bottom-0 left-1/2 w-0 h-[2.5px] bg-orange-400 group-hover:w-full group-hover:left-0 transition-all duration-300'></span>
        </motion.h2>
      </div>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{duration: 0.5, delay: 0.2}}
        viewport={{ once: true }}
        className='max-w-2xl text-center text-gray-500 dark:text-white/75 mb-6'>{desc}</motion.p>
    </>
  )
}

export default Title
