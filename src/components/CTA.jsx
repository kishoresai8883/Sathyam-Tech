import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bgImg from '../assets/hero-bg-img.webp';

const CTA = () => {
  return (
    <section className="py-20 lg:px-20 bg-center text-white" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
              Let’s Build Something Great Together
            </h2>
            <p className="text-lg text-white mb-8 max-w-2xl">
              Your website is more than just an online presence — it’s your brand’s first impression.
              At <span className='text-[#e77504]'>Sathyam Tech Solutions,</span> we ensure it’s a lasting one.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-blue-700 hover:bg-blue-50 py-3 px-6 rounded-md font-medium flex items-center justify-center transition-colors"
              >
                Schedule a Consultation
              </Link>
              <Link 
                to="/services" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center transition-all"
              >
                Browse Our Services
                {/*<ArrowRight className="ml-2 w-4 h-4" />*/}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
