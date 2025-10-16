import React from 'react'
import assets from '../assets/assets'
import Project1 from '../assets/bluewave_project_img.png'
import Title from './Title'
import { motion } from 'motion/react'

const OurWork = () => {
    const workData = [
        {
            title: 'Bluewave Company',
            description: 'A Website is designed and developed for Bluewave Company, a leading provider of Manpower & Mapping Services in india.',
            image: Project1
        },
        {
            title: 'Fitness app promotion',
            description: 'We help you create a marketing strategy that drives results.',
            image: assets.work_fitness_app
        },
        {
            title: 'Dashboard Management',
            description: 'An advanced dashboard that provides real-time insights and analytics for better decision-making.',
            image: assets.work_dashboard_management
        }
    ]
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      transition={{staggerChildren: 0.2}}
      viewport={{ once: true }}
      id='our-work' className='flex flex-col items-center gap-7 px-4
      sm:px-12 lg:px-24 xl:px-40 pt-28 text-gray-700 dark:text-white'>
      <Title title='Our Latest Work' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {
        workData.map((work, index)=>(
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{duration: 0.5, delay: index * 0.2}}
            viewport={{ once: true }}
              key={index} className='hover:scale-102 transition-all cursor-pointer'>
                <div className='w-full h-[250px] overflow-hidden rounded-xl'>
                  <img src={work.image} alt="work images" className='w-full h-full object-fit'/>
                </div>
                <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                <p className='text-sm w-5/6 opacity-60'>{work.description}</p>
            </motion.div> 
        ))}
      </div>
    </motion.div>
  )
}

export default OurWork
