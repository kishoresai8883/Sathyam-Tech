import React from 'react'
import assets from '../assets/assets'
import Title from './Title'

const OurWork = () => {
    const workData = [
        {
            title: 'Mobile App Design',
            description: 'A sleek and intuitive mobile app that enhances user engagement and drives conversions.',
            image: assets.work_mobile_app
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
    <div id='our-work' className='flex flex-col items-center gap-7 px-4
    sm:px-12 lg:px-24 xl:px-40 pt-28 text-gray-700 dark:text-white'>
      <Title title='Our Latest Work' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {
        workData.map((work, index)=>(
            <div key={index} className='hover:scale-102 transition-all duration-500 cursor-pointer'>
                <img src={work.image} alt="work images" className='rounded-xl w-full'/>
                <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                <p className='text-sm w-5/6 opacity-60'>{work.description}</p>
            </div> 
        ))}
      </div>
    </div>
  )
}

export default OurWork
