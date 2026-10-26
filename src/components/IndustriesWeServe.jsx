import React, { useState } from 'react'
import { motion } from 'motion/react'
import Title from './Title'

const industries = [
  {
    icon: '🏥',
    title: 'Healthcare & Hospitals',
    description: 'Patient portals, appointment booking systems, clinic websites, and health-tech apps built for trust and compliance.',
    accent: 'from-rose-500/20 to-pink-500/20',
    border: 'hover:border-rose-500/40',
    glow: 'rgba(244,63,94,0.15)',
  },
  {
    icon: '🏭',
    title: 'Manufacturing Industries',
    description: 'Catalog websites, inventory dashboards, B2B portals, and digital brochures that showcase your industrial excellence.',
    accent: 'from-blue-500/20 to-cyan-500/20',
    border: 'hover:border-blue-500/40',
    glow: 'rgba(59,130,246,0.15)',
  },
  {
    icon: '👗',
    title: 'Fashion & Boutiques',
    description: 'Stunning e-commerce storefronts, look-book galleries, and brand websites that elevate your style identity online.',
    accent: 'from-purple-500/20 to-fuchsia-500/20',
    border: 'hover:border-purple-500/40',
    glow: 'rgba(168,85,247,0.15)',
  },
  {
    icon: '🍽️',
    title: 'Restaurants & Cafés',
    description: 'Online menus, table reservation platforms, food delivery integrations, and mouth-watering brand experiences.',
    accent: 'from-orange-500/20 to-amber-500/20',
    border: 'hover:border-orange-500/40',
    glow: 'rgba(249,115,22,0.15)',
  },
  {
    icon: '🏫',
    title: 'Education & Institutes',
    description: 'LMS platforms, school & college portals, online course websites, and e-learning solutions that empower learners.',
    accent: 'from-emerald-500/20 to-teal-500/20',
    border: 'hover:border-emerald-500/40',
    glow: 'rgba(16,185,129,0.15)',
  },
  {
    icon: '🏗️',
    title: 'Real Estate & Construction',
    description: 'Property listing portals, project showcase sites, virtual tour integrations, and lead generation funnels.',
    accent: 'from-yellow-500/20 to-orange-400/20',
    border: 'hover:border-yellow-500/40',
    glow: 'rgba(234,179,8,0.15)',
  },
  {
    icon: '💼',
    title: 'Retail & E-Commerce',
    description: 'End-to-end online stores, product catalogs, payment integrations, and conversion-optimised shopping experiences.',
    accent: 'from-indigo-500/20 to-violet-500/20',
    border: 'hover:border-indigo-500/40',
    glow: 'rgba(99,102,241,0.15)',
  },
  {
    icon: '🚛',
    title: 'Logistics & Transport',
    description: 'Fleet management dashboards, tracking interfaces, and operational websites that keep your business moving.',
    accent: 'from-sky-500/20 to-blue-400/20',
    border: 'hover:border-sky-500/40',
    glow: 'rgba(14,165,233,0.15)',
  },
]

const IndustryCard = ({ industry, index }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden rounded-2xl border border-white/[0.07] dark:border-white/[0.07]
        bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-sm
        transition-all duration-400 cursor-default
        hover:-translate-y-1.5 hover:shadow-2xl
        ${industry.border}`}
    >
      {/* Mouse-follow glow spotlight */}
      <div
        className="pointer-events-none absolute rounded-full blur-2xl w-[220px] h-[220px] transition-opacity duration-500"
        style={{
          top: mousePos.y - 110,
          left: mousePos.x - 110,
          background: `radial-gradient(circle, ${industry.glow} 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Gradient accent swatch – top edge */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r ${industry.accent.replace('/20', '')}`} />

      <div className="relative z-10 p-6 flex flex-col gap-4">
        {/* Icon bubble */}
        <motion.div
          animate={hovered ? { scale: 1.15, rotate: [0, -6, 6, 0] } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.4 }}
          className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${industry.accent} border border-white/10`}
        >
          {industry.icon}
        </motion.div>

        <div>
          <h3 className="font-bold text-gray-900 dark:text-white text-base leading-snug mb-2">
            {industry.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-white/55 leading-relaxed">
            {industry.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const IndustriesWeServe = () => {
  return (
    <section
      id="industries"
      className="relative flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 pt-28 pb-10 text-gray-700 dark:text-white overflow-hidden"
    >
      {/* Subtle ambient background glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[-5%] w-[420px] h-[420px] rounded-full bg-orange-500/5 blur-[120px]" />
        <div className="absolute bottom-[5%] right-[-5%] w-[380px] h-[380px] rounded-full bg-violet-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <Title
          title="Built for Every Business"
          desc="From healthcare to haute couture — we craft tailored digital solutions for a wide range of industries and business niches."
        />

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 w-full max-w-7xl mt-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} index={index} />
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-sm text-gray-400 dark:text-white/40 text-center max-w-xl"
        >
          Don't see your industry?{' '}
          <a
            href="#contact"
            className="text-orange-400 hover:text-orange-300 underline underline-offset-4 transition-colors"
          >
            Let's talk
          </a>{' '}
          — we build for any niche.
        </motion.p>
      </div>
    </section>
  )
}

export default IndustriesWeServe
