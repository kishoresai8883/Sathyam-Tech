import React from 'react'
import assets from '../assets/assets'
import Project1 from '../assets/bluewave_project_img.webp'
import Project2 from '../assets/biomart_project_img.webp'
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
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mt-8'>
        {
          workData.map((work, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              key={index}
              className='bg-white dark:bg-gray-800/30 rounded-xl p-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer border border-gray-100 dark:border-gray-700/50'>
              <div className='w-full h-[250px] overflow-hidden rounded-xl shadow-md'>
                <img src={work.image} alt="work images" loading="lazy" className='w-full h-full object-fill rounded-xl transition-transform duration-500 hover:scale-110' />
              </div>
              <h3 className='mt-4 mb-2 text-lg font-semibold'>{work.title}</h3>
              <p className='text-sm w-5/6 opacity-60'>{work.description}</p>
            </motion.div>
          ))}
      </div>
    </motion.div>
  )
}

export default OurWork
