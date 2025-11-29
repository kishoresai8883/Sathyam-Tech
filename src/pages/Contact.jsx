import { useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import hero from '../assets/about_hero.webp'
import { motion } from 'motion/react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Have a project in mind or want to learn more about our services?
                We’d love to hear from you. Our team is ready to assist you with
                any inquiries you may have.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <EmailIcon className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">sathyamtechsolutions@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <PhoneIcon className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">+91 9502908883</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <LocationOnIcon className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">2nd Floor, Huda Layout,<br /> Hyderabad, India</p>
                </div>
              </div>
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

              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Contact
