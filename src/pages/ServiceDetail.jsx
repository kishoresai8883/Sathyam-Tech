import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { servicesData, processSteps } from '../data/services';
import CTA from '../components/CTA';
import heroBg from '../assets/service_hero.webp';
import assets from '../assets/assets';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === parseInt(id, 10));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
          Service <span className="text-[#e77504]">Not Found</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
          The service you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/services"
          className="bg-[#e77504] hover:bg-[#d06803] text-white px-8 py-3 rounded-full font-semibold transition-colors"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[50vh] min-h-[400px] w-full bg-cover bg-center mt-16 flex items-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4d4d]/95 via-[#1a4d4d]/85 to-transparent"></div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight max-w-3xl">
              {service.title}
            </h1>
            <nav className="flex items-center gap-3 text-sm tracking-wider">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors font-semibold">HOME</Link>
              <span className="text-gray-400">/</span>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors font-semibold">SERVICES</Link>
              <span className="text-gray-400">/</span>
              <span className="text-[#e77504] font-semibold uppercase">{service.title}</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

          {/* Left Content */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Overview</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                {service.description}
              </p>

              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Key Features & Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-[#e77504]/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#e77504]/10 flex items-center justify-center shrink-0 text-[#e77504] group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white text-lg">{feature}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="sticky top-24 rounded-2xl p-8 bg-[#1a4d4d] text-white shadow-xl relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#e77504] rounded-full blur-3xl opacity-30"></div>

              <h3 className="text-2xl font-bold mb-4 relative z-10">Need this service?</h3>
              <p className="text-gray-300 mb-8 relative z-10">
                Let's discuss how our {service.title} expertise can help scale your business to the next level.
              </p>

              <Link
                to="/contact"
                className="block w-full text-center py-4 rounded-xl bg-[#e77504] hover:bg-[#d06803] text-white font-bold transition-colors relative z-10"
              >
                Get a Free Consultation
              </Link>

              <div className="mt-6 pt-6 border-t border-white/10 relative z-10">
                <p className="text-sm text-gray-400 mb-2">Or call us directly:</p>
                <a href="tel:+918074900735" className="text-xl font-bold hover:text-[#e77504] transition-colors">
                  +91 9502908883
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-20 bg-[#1a4d4d] text-white overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-[#e77504] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-[#5044E5] rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Working <span className="text-[#e77504]">Process</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">We follow a structured agile approach to ensure smooth delivery and high-quality results.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="text-5xl font-bold text-[#e77504]/20 absolute top-4 right-4">{item.step}</div>
                <div className="text-xl font-bold mb-3">{item.title}</div>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default ServiceDetail;
