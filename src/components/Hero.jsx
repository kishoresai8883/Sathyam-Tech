import React from 'react'
import assets from '../assets/assets'
import heroImg from '../assets/hero_img1.webp'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div id="hero" className='flex flex-col items-center gap-6 pt-24 px-4 sm:px-12
    lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          boxShadow: [
            '0 0 0px rgba(231, 117, 4, 0)',
            '0 0 14px rgba(231, 117, 4, 0.45)',
            '0 0 0px rgba(231, 117, 4, 0)',
          ],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.2 },
          y: { duration: 0.5, delay: 0.2 },
          boxShadow: { duration: 2.2, delay: 1, repeat: Infinity, ease: 'easeInOut' },
        }}
        className='inline-flex items-center gap-2 border border-orange-300 dark:border-orange-500/50
          bg-orange-50 dark:bg-orange-950/30 px-4 py-1.5 rounded-full'>
        {/* Pulsing live dot */}
        <span className='relative flex h-2 w-2'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75'></span>
          <span className='relative inline-flex rounded-full h-2 w-2 bg-orange-500'></span>
        </span>
        <p className='text-sm font-semibold text-orange-600 dark:text-orange-400'>Revolutionize Workflow</p>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='text-4xl sm:text-4xl md:text-5xl xl:text-[84px] font-medium
          sl:leading-[95px] max-w-6xl'>We build high-performance <span className='bg-gradient-to-r from-[#e77504] to-[#f0a510] bg-clip-text
          text-transparent'>Digital Solutions</span> that scale your Business</motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75
          max-w-4/5 max-w-xl pb-3'>Bringing innovative ideas to life as engaging, interactive Digital experiences that spark authentic connections.</motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className='relative w-full'
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <img
          src={heroImg}
          alt="hero img"
          width={1000}
          height={563}
          loading="eager"
          fetchpriority="high"
          decoding="async"
          style={{ display: 'block' }}
          className='w-full max-w-6xl rounded-3xl object-cover min-h-[280px] sm:min-h-0 sm:h-auto'
        />
      </motion.div>

      {/* Contact Button — mobile only */}
      <motion.div
        className='sm:hidden'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
      >
        <Link
          to='/contact'
          className='inline-flex items-center gap-2 px-8 py-3.5 mt-4 rounded-md font-semibold text-white
            bg-gradient-to-r from-[#e77504] to-[#f0a510]
            shadow-lg shadow-orange-200 dark:shadow-orange-900/30
            hover:shadow-xl hover:shadow-orange-300 dark:hover:shadow-orange-800/40
            hover:-translate-y-0.5 active:translate-y-0
            transition-all duration-200'
        >
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </div>
  )
}

export default Hero
