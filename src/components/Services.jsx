import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'

const servicesData = [
    {
        title: "Website/App Development",
        description: "We turn bold ideal into powerful digital solutions that connect, engage...",
        icon: assets.ads_icon
    },
    {
        title: "UI/UX Design",
        description: "We turn bold ideal into powerful digital solutions that connect, engage...",
        icon: assets.marketing_icon
    },
    {
        title: "Digital Marketing",
        description: "We turn bold ideal into powerful digital solutions that connect, engage...",
        icon: assets.marketing_icon
    },
    {
        title: "Branding",
        description: "We turn bold ideal into powerful digital solutions that connect, engage...",
        icon: assets.ads_icon
    }
]

const Services = () => {
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren: 0.2}}
    viewport={{ once: true }}
    id='services' className='relative flex flex-col items-center gap-7 px-4
    sm:px-12 lg:px-24 xl:px-40 pt-28 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} alt="service bgimg" className='absolute -top-60 -left-80
        -z-10 dark:hidden'/>
      <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>
      <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index)=> (
            <ServiceCard key={index} service={service} index={index}/>
        ))}
      </div>
    </motion.div>
  )
}

export default Services
