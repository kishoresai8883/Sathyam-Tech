import React from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'

const servicesData = [
  {
    title: "Custom Website Development",
    description: "We create custom websites tailored to your business needs, ensuring a seamless user experience and effective online presence.",
    icon: assets.ads_icon
  },
  {
    title: "App Development",
    description: "We develop custom mobile applications for iOS and Android, delivering tailored solutions that enhance user engagement.",
    icon: assets.marketing_icon
  },
  {
    title: "UI/UX Design",
    description: "We design user-friendly interfaces that enhance user experience and improve the overall user journey.",
    icon: assets.content_icon
  },
  {
    title: "Digital Marketing",
    description: "We implement effective digital marketing strategies to improve brand visibility, drive traffic, and increase conversions.",
    icon: assets.social_icon
  }
]

const Services = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id='services' className='relative flex flex-col items-center px-4
    sm:px-12 lg:px-24 xl:px-40 pt-28 text-gray-700 dark:text-white'>
      <img src={assets.bgImage2} alt="service bgimg" width={1920} height={1415} loading="lazy" className='absolute -top-60 -left-80
        -z-10 dark:hidden'/>
      <Title title='How can we help?' desc='Where technology meets creativity.
We deliver digital experiences that make brands stand out.' />
      <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
      <div className='flex mb-4 mt-4 justify-center sm:justify-start'>
        <Link to='/services' className='relative overflow-hidden group flex items-center gap-3 bg-gradient-to-r from-[#e77504] to-[#f0a510] text-white px-8 py-3 rounded-md font-semibold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300'>
          <span className='relative z-10'>View All Services</span>
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

export default Services
