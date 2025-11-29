import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.loading('Submitting...')
        const formData = new FormData(e.target)

        formData.append('access_key', "3b02c39a-fd39-4e05-b291-bc58569c8b0d")

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })

            const data = await res.json()

            if (data.success) {
                toast.success('Thank you for your Submission. We will get back to you soon...')
                toast.dismiss()
                e.target.reset()
            } else {
                toast.dismiss()
                toast.error(data.message)
            }
        } catch (error) {
            toast.dismiss()
            toast.error(error.message)
        }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
            id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12
                lg:px-24 xl:px-40 py-28 text-gray-700 dark:text-white'>
            <Title title='Reach out Us' desc='From strategy to execution, we craft digital
      solutions that move your business forward.'/>
            <div className='grid md:grid-cols-2 gap-10 w-full items-center'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='flex flex-col w-full'>
                    <div className='relative w-fit group mb-2 p-1'>
                        <h1 className='text-xl font-semibold'>Get In Touch</h1>
                        <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-400 group-hover:w-full group-hover:left-0 transition-all duration-300'></span>
                    </div>
                    <p className='text-sm text-gray-500 max-w-lg'>We would love to hear from you. Please fill out this form and we will get in touch with you shortly.</p>
                    <div className='flex gap-3 mt-6'>
                        <EmailIcon className='text-orange-500' />
                        <div className='flex flex-col -mt-2'>
                            <h3 className='font-semiBold text-md'>Mail</h3>
                            <h3 className='font-semiBold text-md'>sathyamtechsolutions@gmail.com</h3>
                        </div>
                    </div>
                    <div className='flex gap-3 mt-6'>
                        <LocalPhoneIcon className='text-orange-500' />
                        <div className='flex flex-col -mt-2'>
                            <h3 className='font-semiBold text-md'>Phone</h3>
                            <h3 className='font-semiBold text-md'>+91 9502908883</h3>
                        </div>
                    </div>
                    <div className='flex gap-3 mt-6'>
                        <HomeIcon className='text-orange-500' />
                        <div className='flex flex-col -mt-2'>
                            <h3 className='font-semiBold text-md'>Address</h3>
                            <h3 className='font-semiBold text-md'>2nd Floor, Huda Layout,<br /> Hyderabad - India</h3>
                        </div>
                    </div>
                </motion.div>
                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full px-6 py-10 rounded-lg border border-gray-200 shadow-xl shadow-gray-100'>
                    <div>
                        <p className='mb-2 text-sm font-medium'>Your Name</p>
                        <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                            <img src={assets.person_icon} alt="person icon" />
                            <input type="text" name='name' placeholder='Enter your name' className='w-full
                    p-3 text-sm outline-none bg-transparent' required />
                        </div>
                    </div>
                    <div>
                        <p className='mb-2 text-sm font-medium'>Email Id</p>
                        <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                            <img src={assets.email_icon} alt="email icon" />
                            <input type="email" name='email' placeholder='Enter your email' className='w-full
                    p-3 text-sm outline-none bg-transparent' required />
                        </div>
                    </div>
                    <div className='sm:col-span-2'>
                        <p className='mb-2 text-sm font-medium'>Message</p>
                        <textarea rows={8} name='message' placeholder='Enter you message' className='w-full
                p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent' required />
                    </div>
                    <button type='submit' className='w-max flex gap-2 bg-primary text-white
            text-sm px-10 py-3 rounded-md cursor-pointer hover:scale-102 transition-all'>
                        Submit <img src={assets.arrow_icon} alt="submit" className='w-4' />
                    </button>
                </motion.form>
            </div>

        </motion.div>
    )
}

export default Contact
