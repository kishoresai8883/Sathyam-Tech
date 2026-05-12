import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import CTA from '../components/CTA'
import hero from '../assets/service_hero.webp'
import assets from '../assets/assets'
import Title from '../components/Title'
import { servicesData, processSteps } from '../data/services'

const ServiceGridCard = ({ service, index }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [visible, setVisible] = React.useState(false);
  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group"
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      />
      <div className="p-8 hover:p-[30px] hover:m-[2px] transition-all bg-white dark:bg-gray-800 z-10 relative rounded-2xl h-full flex flex-col md:flex-row gap-6 items-start">
        <div className="w-16 h-16 p-3 bg-orange-50 dark:bg-gray-700 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
          <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-[#e77504] transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
            {service.description}
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="w-1.5 h-1.5 bg-[#e77504] rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
          
          <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 text-[#e77504] font-semibold group/link">
            Learn More 
            <span className="group-hover/link:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <>

      {/* Hero Section */}
      <section
        className="relative h-[400px] w-full bg-cover bg-center mt-16 flex items-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4d4d]/95 via-[#1a4d4d]/85 to-[#1a4d4d]/75"></div>

        {/* Content */}
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-white">
            Our <span className="text-[#e77504] font-light">Services</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-8 font-light">
            Providing top-notch Digital solutions to elevate your business.
            We blend creativity with technology to deliver excellence.
          </p>

          <nav className="flex items-center gap-3 text-sm tracking-wider">
            <Link
              to="/"
              className="text-white hover:text-primary transition-colors font-semibold"
            >
              HOME
            </Link>
            <span className="text-white">/</span>
            <span className="text-[#e77504] font-semibold">SERVICES</span>
          </nav>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Title title='What We Offer' />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {servicesData.map((service, index) => (
              <ServiceGridCard key={service.id} service={service} index={index} />
            ))}
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

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src={assets.hero_img}
              alt="Why choose us"
              className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-[#e77504] font-bold uppercase tracking-wider mb-2">// Why Choose Us</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              We Help You <br /> <span className="text-primary-600">Scale Your Business</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              We are more than just a service provider; we are your digital partner. We understand your business goals and deliver solutions that drive real results.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">✓</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">Expert Team</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Highly skilled developers and designers with years of experience.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">✓</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">24/7 Support</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">We are always here to help you, anytime, anywhere.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl">✓</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">Result Oriented</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Focus on delivering measurable results that impact your bottom line.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

export default Services
