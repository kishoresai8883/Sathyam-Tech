import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import aboutImg from '../assets/hero_img1.jpg'
import StarIcon from '@mui/icons-material/Star';

const About = () => {
  return (
    <div className='flex flex-col items-center gap-7 px-4
      sm:px-12 lg:px-24 xl:px-40 pt-28 text-gray-700 dark:text-white'>
      <Title title="About Us" desc='Our dedicated team are committed to your success, delivering tailored, scalable solutions that drive growth and efficiency. Your success is our focus.' />
        <div className='grid md:grid-cols-2 gap-16'>
            <img src={aboutImg} alt="about img" className='border border-gray-100 shadow-xl shadow-gray-100 rounded-tr-[64px] rounded-bl-[64px]' />
            <div className='text-center'>
                <h1 className='mt-3 mb-2 text-xl font-semibold'>Our dedicated Team committed to your success</h1>
                <p className='text-sm opacity-60 mb-6'>A passionate team bringing friendly web solutions to businesses—turning your ideas into vibrant online experiences.</p>
                <ul className='list-disc pl-6 mb-4 text-sm opacity-75 space-y-2'>
                    <li className='flex gap-2'>
                        <StarIcon/>
                        Expert IT consulting and strategic planning
                    </li>
                    <li className='flex gap-2'>
                        <StarIcon/>
                        Custom software development solutions
                    </li>
                    <li className='flex gap-2'>
                        <StarIcon/>
                        Cloud computing and infrastructure management
                    </li>
                    <li className='flex gap-2'>
                        <StarIcon/>
                        24/7 technical support and maintenance
                    </li>
                    <li className='flex gap-2'>
                        <StarIcon/>
                        Digital transformation services
                    </li>
                </ul>
                <div className='flex justify-center'>
                    <button className='flex w-max gap-2 bg-primary text-white
                        text-sm px-8 py-2 rounded-md cursor-pointer hover:scale-102 transition-all'>
                        Know More <img src={assets.arrow_icon} alt="about" className='w-4'/>
                </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About
