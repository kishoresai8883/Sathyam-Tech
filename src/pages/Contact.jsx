import { useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import hero from '../assets/contact_hero.webp'
import { motion } from 'motion/react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CTA from '../components/CTA'
import Title from '../components/Title'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    toast.loading("Submitting....");
    const formData = new FormData(event.target);
    formData.append("access_key", "407c5c5e-7473-492b-af8c-4ce6ad4f2a7c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        toast.dismiss(); // Dismiss the loading toast
        toast.success("Thank you for your Submission. We will get back to you soon...");
        event.target.reset();
      } else {
        toast.dismiss(); // Dismiss the loading toast
        toast.error("Error");
      }
    } catch (error) {
      toast.dismiss(); // Dismiss the loading toast
      toast.error("Error");
    }


  };

  return (
    <>
      <section
        className="relative h-[400px] w-full bg-cover bg-center mt-16 flex items-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4d4d]/95 via-[#1a4d4d]/85 to-[#1a4d4d]/75"></div>

        {/* Content */}
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-white">
            Contact <span className="text-[#e77504] font-light">us</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8 font-light">
            Ready to take your business to the next level? Get in touch and let's create something amazing together.
          </p>

          <nav className="flex items-center gap-3 text-sm tracking-wider">
            <Link
              to="/"
              className="text-white hover:text-primary transition-colors font-semibold"
            >
              HOME
            </Link>
            <span className="text-white">/</span>
            <span className="text-[#e77504] font-semibold">CONTACT</span>
          </nav>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-black text-gray-700 dark:text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className='relative w-fit group mb-2 p-1'>
                <h1 className='text-3xl font-bold'>Get In Touch</h1>
                <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-400 group-hover:w-full group-hover:left-0 transition-all duration-300'></span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Have a project in mind or want to learn more about our services?
                We’d love to hear from you. Our team is ready to assist you with
                any inquiries you may have.
              </p>
            </div>

            <div className="space-y-8">
              <a href="mailto:sathyamtechsolutions@gmail.com" target='_blank' rel='noreferrer' className="flex items-start gap-5 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <EmailIcon className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">sathyamtechsolutions@gmail.com</p>
                </div>
              </a>
              <a href="tel:+919502908883" target='_blank' rel='noreferrer' className="flex items-start gap-5 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <PhoneIcon className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">+91 9502908883</p>
                </div>
              </a>
              <a href="https://wa.me/919502908883" target='_blank' rel='noreferrer' className="flex items-start gap-5 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <WhatsAppIcon className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">WhatsApp Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">+91 9502908883</p>
                </div>
              </a>
              <a href="https://maps.app.goo.gl/YourMapLinkHere" target='_blank' rel='noreferrer' className="flex items-start gap-5 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <LocationOnIcon className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">2nd Floor, Huda Layout,<br /> Hyderabad, India</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium ml-1">First Name</label>
                  <input type="text" name='firstname' placeholder="John" className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium ml-1">Last Name</label>
                  <input type="text" name='lastname' placeholder="Doe" className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium ml-1">Email Address</label>
                <input type="email" name='email' placeholder="john@example.com" className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium ml-1">Message</label>
                <textarea rows="4" name='message' placeholder="Tell us about your project..." className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"></textarea>
              </div>

              <div className='flex justify-center sm:justify-start'>
                <button type="submit" className='relative overflow-hidden group flex items-center gap-3 bg-gradient-to-r from-[#e77504] to-[#f0a510] text-white px-8 py-3 rounded-md font-semibold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 w-max'>
                  <span className='relative z-10'>Send Message</span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className='w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform flex-shrink-0'
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </motion.svg>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-md" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <Title title="Find Us Here" desc="Visit our office in Hyderabad. We're conveniently located and ready to meet with you." />
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] border-4 border-white dark:border-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160484866!2d78.24323149999999!3d17.412608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1733421347000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
              className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/place/13-1-146%2F2,+Mothi+Nagar,+Rama+Rao+Nagar,+Borabanda,+Hyderabad,+Telangana+500114/@17.4547082,78.4216184,19z/data=!4m15!1m8!3m7!1s0x3bcb911b0d7d275d:0x407689b0171afb3!2sKabir+Nagar,+Madhavi+Estate,+Moti+Nagar,+Erragadda,+Hyderabad,+Telangana+500114!3b1!8m2!3d17.4570297!4d78.4224741!16s%2Fg%2F11ww6d3sgg!3m5!1s0x3bcb911bc8362a63:0x5a879d47515eb27d!8m2!3d17.4547244!4d78.4217562!16s%2Fg%2F11x91q0zvr?entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group inline-flex items-center gap-3 bg-gradient-to-r from-[#e77504] to-[#f0a510] text-white px-8 py-3 rounded-md font-semibold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 w-max"
            >
              <span className='relative z-10'>Get Directions</span>
              <motion.div className="relative z-10 group-hover:translate-x-1 transition-transform flex-shrink-0">
                <LocationOnIcon />
              </motion.div>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-md" />
            </a>
          </div>
        </motion.div>
      </section>
      <CTA />
    </>
  )
}

export default Contact
