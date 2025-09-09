import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'

const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target)

        formData.append('access_key', "40e10665-ecb9-4abf-acfa-1162e382c5a1")

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })

        const data = await res.json()

        if (data.success) {
            toast.success('Thank you for your Submission. We will get back to you soon.')
            e.target.reset()
        } else {
            toast.error(data.message)
        }
        } catch (error) {
            toast.error(error.message)
        }
    }

  return (
    <motion.div 
        initial="hidden"
        whileInView="visible"
        transition={{staggerChildren: 0.2}}
        viewport={{once: true}}
        id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12
        lg:px-24 xl:px-40 pt-28 text-gray-700 dark:text-white'>
      <Title title='Reach out Us' desc='From strategy to execution, we craft digital
      solutions that move your business forward.'/>
      <motion.form 
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.4}}
        viewport={{once: true}}
        onSubmit={handleSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
        <div>
            <p className='mb-2 text-sm font-medium'>Your Name</p>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                <img src={assets.person_icon} alt="person icon" />
                <input type="text" name='name' placeholder='Enter your name' className='w-full
                p-3 text-sm outline-none bg-transparent' required/>
            </div>
        </div>
        <div>
            <p className='mb-2 text-sm font-medium'>Email Id</p>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                <img src={assets.email_icon} alt="email icon" />
                <input type="email" name='email' placeholder='Enter your email' className='w-full
                p-3 text-sm outline-none bg-transparent' required/>
            </div>
        </div>
        <div className='sm:col-span-2'>
            <p className='mb-2 text-sm font-medium'>Message</p>
            <textarea rows={8} name='message' placeholder='Enter you message' className='w-full
            p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent' required/>
        </div>
        <button type='submit' className='w-max flex gap-2 bg-primary text-white
        text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-102 transition-all'>
            Submit <img src={assets.arrow_icon} alt="submit" className='w-4'/>
        </button>
      </motion.form>
    </motion.div>
  )
}

export default Contact
