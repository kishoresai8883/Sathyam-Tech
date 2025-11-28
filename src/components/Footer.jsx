import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'
import { motion } from 'motion/react'
import Logo from '../assets/STS-logo-bg-white.webp'
import LogoBlk from '../assets/STS-logo-bg-black.webp'

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
              src={theme === 'dark' ? LogoBlk : Logo}
              alt="logo"
              className="w-32 sm:w-40"
            />
          </Link>
          <p className='max-w-md'>From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <ul className='flex gap-8'>
            <li><Link to="/" className='hover:text-primary'>Home</Link></li>
            <li><Link to="/about" className='hover:text-primary'>About</Link></li>
            <li><Link to="/services" className='hover:text-primary'>Services</Link></li>
            <li><Link to="/contact" className='hover:text-primary'>Contact</Link></li>
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
          <div className='flex gap-2 text-sm'>
            <input type="email" placeholder='Enter your Email' className='w-full
            p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent
            border border-gray-300 dark:border-gray-500' />
            <button className='bg-primary text-white px-6 rounded'>Subscribe</button>
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
          <a href="https://www.linkedin.com/in/kishore-sai" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-300">
            <img src={assets.linkedin_icon} alt="linkedin icon" className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/kishoresai_g" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-300">
            <img src={assets.instagram_icon} alt="instagram icon" className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/Sai207Sai" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-300">
            <img src={assets.twitter_icon} alt="twitter icon" className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-300">
            <img src={assets.facebook_icon} alt="facebook icon" className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Footer
