import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import CTA from '../components/CTA'
import hero from '../assets/service_hero.webp'
import assets from '../assets/assets'
import Title from '../components/Title'

const servicesData = [
  {
    id: 1,
    title: "Custom Website Development",
    description: "We build high-performance, scalable, and secure websites tailored to your unique business needs. From corporate sites to complex web applications.",
    features: ["Responsive Design", "SEO Optimized structure", "Fast Loading Speed", "Custom CMS Integration"],
    icon: assets.ads_icon
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Transform your ideas into powerful mobile experiences. We develop native and cross-platform apps for both iOS and Android platforms.",
    features: ["iOS & Android", "Cross-Platform (React Native)", "User-Centric Design", "App Store Deployment"],
    icon: assets.marketing_icon
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "We craft intuitive and visually stunning user interfaces that drive engagement. Our design process focuses on the end-user journey.",
    features: ["Wireframing & Prototyping", "User Research", "Visual Identity", "Interaction Design"],
    icon: assets.content_icon
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Accelerate your growth with data-driven digital marketing strategies. We help you reach your target audience and convert leads.",
    features: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Content Strategy", "PPC Advertising"],
    icon: assets.social_icon
  },
  {
    id: 5,
    title: "AI Solutions",
    description: "We develop AI solutions to help you automate and optimize your business processes.",
    features: ["Automation", "Chatbots & Text analysis", "Image recognition & business analysis", "Predictive Analytics"],
    icon: assets.marketing_icon
  }
]

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'We analyze your requirements and understand your business goals.' },
  { step: '02', title: 'Strategy', desc: 'We create a tailored roadmap and design the best solution for you.' },
  { step: '03', title: 'Development', desc: 'Our experts build your product using the latest technologies.' },
  { step: '04', title: 'Launch', desc: 'We test, deploy, and ensure everything runs smoothly.' },
]

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
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-[#e77504] group"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
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
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 bg-[#e77504] rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
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

          <div className="grid md:grid-cols-4 gap-8">
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
