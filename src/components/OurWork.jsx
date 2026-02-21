import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'
import Project1 from '../assets/bluewave_project_img.webp'
import Project2 from '../assets/biomart_project_img1.webp'
import Title from './Title'
import { motion } from 'motion/react'

const OurWork = () => {
  const workData = [
    {
      title: 'Bluewave Company',
      description: 'A Website is designed and developed to Bluewave Company, a leading provider of Manpower & Mapping Services in india.',
      image: Project1
    },
    {
      title: 'Biomart Company',
      description: 'A Website is designed and developed to Biomart Company, a sustainable eco-friendly solutions.',
      image: Project2
    },
    {
      title: 'Furniture application',
      description: 'A mobile application is designed and developed for furniture shopping with user-friendly interface and seamless navigation.',
      image: assets.furniture_app
    }
  ]
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id='our-work' className='flex flex-col items-center px-4
      sm:px-12 lg:px-24 xl:px-40 pt-28 text-gray-700 dark:text-white'>
      <Title title='Our Latest Work' desc='Our focus is simple — combine smart design with robust development to deliver outstanding results.' />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl mt-8'>
        {
          workData.map((work, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              key={index}
              className='bg-white dark:bg-gray-800/30 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer border border-gray-100 dark:border-gray-700/50 flex flex-col'>
              <div className='w-full h-54 sm:h-52 lg:h-56 overflow-hidden'>
                <img
                  src={work.image}
                  alt={work.title}
                  width="606"
                  height="340"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectPosition: 'center top' }}
                  className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                />
              </div>
              <div className='p-3 sm:p-4 flex flex-col flex-1'>
                <h3 className='mb-2 text-lg font-semibold leading-snug'>{work.title}</h3>
                <p className='text-sm opacity-60 leading-relaxed flex-grow'>{work.description}</p>
              </div>
            </motion.div>
          ))}

      </div>
      <div className='flex mb-4 mt-8 justify-center sm:justify-start'>
        <Link to='/contact' className='relative overflow-hidden group flex items-center gap-3 bg-gradient-to-r from-[#e77504] to-[#f0a510] text-white px-8 py-3 rounded-md font-semibold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300'>
          <span className='relative z-10'>Let's Discuss</span>
          <motion.img
            src={assets.arrow_icon}
            alt="arrow"
            className='w-4 h-4 brightness-0 invert relative z-10 group-hover:translate-x-1 transition-transform'
          />
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-md" />
        </Link>
      </div>
    </motion.div>
  )
}

export default OurWork
