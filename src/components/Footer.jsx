import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'
import { motion } from 'motion/react'
import Logo from '../assets/Logo.webp'

const Footer = ({ theme }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-100 dark:bg-gray-900 pt-10 sm:pt-10
      px-4 sm:px-10 lg:px-24 xl:px-40">
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
          <Link to="/">
            <img
              src={theme === 'dark' ? Logo : Logo}
              alt="logo"
              width={160}
              height={53}
              className="w-32 sm:w-40"
            />
          </Link>
          <p className='max-w-md'>From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <ul className='flex gap-8'>
            <li>
              <Link to="/" className='relative transition-all duration-300 hover:text-orange-500 dark:hover:text-orange-400 group inline-block'>
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            </li>
            <li>
              <Link to="/about" className='relative transition-all duration-300 hover:text-orange-500 dark:hover:text-orange-400 group inline-block'>
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            </li>
            <li>
              <Link to="/services" className='relative transition-all duration-300 hover:text-orange-500 dark:hover:text-orange-400 group inline-block'>
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className='relative transition-all duration-300 hover:text-orange-500 dark:hover:text-orange-400 group inline-block'>
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='text-gray-600 dark:text-gray-400'>
          <h3 className='font-semibold'>Subscribe to our newsletter</h3>
          <p className='text-sm mt-2 mb-6'>The latest news, articles and resources, sent to your inbox weekly.</p>
          <div className='flex gap-2 text-sm items-stretch'>
            <input type="email" placeholder='Enter your Email' className='w-full
            p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent
            border border-gray-300 dark:border-gray-500' />
            <div className='flex items-center'>
              <button className='relative overflow-hidden group flex items-center gap-2 bg-gradient-to-r from-[#e77504] to-[#f0a510] text-white px-6 py-3 rounded-md font-semibold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 whitespace-nowrap'>
                <span className='relative z-10'>Subscribe</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-md" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <hr className='border-gray-300 dark:border-gray-600 my-6' />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className='flex justify-center sm:justify-between gap-4 pb-6 text-sm
      text-gray-500 flex-wrap'>
        <p>Copyright 2025 © Sathyam Tech Solutions - All Rights Reserved.</p>
        <div className='flex items-center justify-between gap-4'>
          <a href="https://www.linkedin.com/in/kishore-sai" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 group">
            <img src={assets.linkedin_icon} alt="linkedin icon" width={20} height={20} className="w-5 h-5 transition-all duration-300 group-hover:brightness-0 group-hover:saturate-100 group-hover:invert-[.45] group-hover:sepia-[1] group-hover:saturate-[5] group-hover:hue-rotate-[340deg]" />
          </a>
          <a href="https://instagram.com/kishoresai_g" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 group">
            <img src={assets.instagram_icon} alt="instagram icon" width={20} height={20} className="w-5 h-5 transition-all duration-300 group-hover:brightness-0 group-hover:saturate-100 group-hover:invert-[.45] group-hover:sepia-[1] group-hover:saturate-[5] group-hover:hue-rotate-[340deg]" />
          </a>
          <a href="https://twitter.com/Sai207Sai" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 group">
            <img src={assets.twitter_icon} alt="twitter icon" width={20} height={20} className="w-5 h-5 transition-all duration-300 group-hover:brightness-0 group-hover:saturate-100 group-hover:invert-[.45] group-hover:sepia-[1] group-hover:saturate-[5] group-hover:hue-rotate-[340deg]" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 group">
            <img src={assets.facebook_icon} alt="facebook icon" width={20} height={20} className="w-5 h-5 transition-all duration-300 group-hover:brightness-0 group-hover:saturate-100 group-hover:invert-[.45] group-hover:sepia-[1] group-hover:saturate-[5] group-hover:hue-rotate-[340deg]" />
          </a>
        </div>
      </motion.div>
    </motion.div >
  )
}

export default Footer
