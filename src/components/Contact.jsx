import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
                toast.dismiss()
                toast.success('Thank you for your Submission. We will get back to you soon...')
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
            id='contact-us' className='flex flex-col items-center px-4 sm:px-12
                lg:px-24 xl:px-40 py-28 text-gray-700 dark:text-white'>
            <Title title='Reach out Us' desc='Want to discuss a project or a service? We’d love to hear from you. Contact us - we’re ready to help' />
            <div className='grid md:grid-cols-2 gap-10 w-full items-center'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='flex flex-col w-full'>
                    <div className='relative w-fit group mb-2 p-1'>
                        <h1 className='text-3xl font-bold'>Get In Touch</h1>
                        <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-400 group-hover:w-full group-hover:left-0 transition-all duration-300'></span>
                    </div>
                    <p className='text-sm text-gray-500 max-w-lg mb-4'>We would love to hear from you. Please fill out this form and we will get in touch with you shortly.</p>
                    <div className="space-y-8">
                        <div className="flex items-start gap-5 group">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                <EmailIcon className="text-orange-500 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                                <p className="text-gray-500 dark:text-gray-400">sathyamtechsolutions@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5 group">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                <PhoneIcon className="text-orange-500 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                                <p className="text-gray-500 dark:text-gray-400">+91 9502908883</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5 group">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                <LocationOnIcon className="text-orange-500 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                                <p className="text-gray-500 dark:text-gray-400">2nd Floor, Huda Layout,<br /> Hyderabad, India</p>
                            </div>
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
                            <img src={assets.person_icon} alt="person icon" width={20} height={20} />
                            <input type="text" name='name' placeholder='Enter your name' className='w-full
                    p-3 text-sm outline-none bg-transparent' required />
                        </div>
                    </div>
                    <div>
                        <p className='mb-2 text-sm font-medium'>Email Id</p>
                        <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                            <img src={assets.email_icon} alt="email icon" width={20} height={20} />
                            <input type="email" name='email' placeholder='Enter your email' className='w-full
                    p-3 text-sm outline-none bg-transparent' required />
                        </div>
                    </div>
                    <div className='sm:col-span-2'>
                        <p className='mb-2 text-sm font-medium'>Message</p>
                        <textarea rows={8} name='message' placeholder='Enter you message' className='w-full
                p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent' required />
                    </div>
                    <div className='flex justify-center sm:justify-start'>
                        <button type='submit' className='relative overflow-hidden group flex items-center gap-3 bg-gradient-to-r from-[#e77504] to-[#f0a510] text-white px-8 py-3 rounded-md font-semibold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 w-max'>
                            <span className='relative z-10'>Submit</span>
                            <motion.img
                                src={assets.arrow_icon}
                                alt="arrow"
                                className='w-4 h-4 brightness-0 invert relative z-10 group-hover:translate-x-1 transition-transform flex-shrink-0'
                            />
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-md" />
                        </button>
                    </div>
                </motion.form>
            </div>

        </motion.div>
    )
}

export default Contact
