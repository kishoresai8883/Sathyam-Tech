import React from 'react'
import assets from '../assets/assets'
import heroImg from '../assets/hero_img1.webp'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <div id="hero" className='flex flex-col items-center gap-6 pt-24 px-4 sm:px-12
    lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className='items-center border border-slate-300 p-1.5 px-4 rounded-full'>
        <p className='text-sm font-semiBold'>Revolutionize Workflow</p>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium
          sl:leading-[95px] max-w-5xl'>Engineering the Future of <span className='bg-gradient-to-r from-[#e77504] to-[#f0a510] bg-clip-text
          text-transparent'>Digital</span> Excellence</motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75
          max-w-4/5 max-w-xl pb-3'>Bringing innovative ideas to life as engaging, interactive Digital experiences that spark authentic connections.</motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        viewport={{ once: true }}
        className='relative'>
        <img src={heroImg} alt="hero img" width={1000} height={563} className='w-full max-w-6xl rounded-3xl' />
      </motion.div>
    </div>
  )
}

export default Hero
