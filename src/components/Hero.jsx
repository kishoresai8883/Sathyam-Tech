import React from 'react'
import { motion, useSpring, useTransform, useMotionValue } from 'motion/react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'
import InteractiveDotGrid from './InteractiveDotGrid'

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Ultra-responsive spring transitions for high-end kinetic motion
  const springConfig = { damping: 28, stiffness: 90, mass: 0.6 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Background glow movement offset
  const bgX = useTransform(smoothMouseX, [-0.5, 0.5], [50, -50]);
  const bgY = useTransform(smoothMouseY, [-0.5, 0.5], [50, -50]);


  // Parallax floating offsets for our glassmorphic floaters (Orbital field feel)
  const float1X = useTransform(smoothMouseX, [-0.5, 0.5], [-45, 45]);
  const float1Y = useTransform(smoothMouseY, [-0.5, 0.5], [-35, 35]);

  const float2X = useTransform(smoothMouseX, [-0.5, 0.5], [40, -40]);
  const float2Y = useTransform(smoothMouseY, [-0.5, 0.5], [30, -30]);

  const float3X = useTransform(smoothMouseX, [-0.5, 0.5], [-30, 30]);
  const float3Y = useTransform(smoothMouseY, [-0.5, 0.5], [50, -50]);

  const float4X = useTransform(smoothMouseX, [-0.5, 0.5], [55, -55]);
  const float4Y = useTransform(smoothMouseY, [-0.5, 0.5], [-45, 45]);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top, width, height } = currentTarget.getBoundingClientRect();
    let x = (clientX - left) / width - 0.5;
    let y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div id="hero" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      className='relative flex flex-col items-center justify-center pt-24 md:pt-32 pb-24 px-4 sm:px-12
      lg:px-24 xl:px-40 w-full min-h-[100vh] overflow-hidden bg-[#050816] text-white transition-colors duration-500'>

      {/* 1. Futuristic Dotted Matrix Grid Background with Drifting Particles */}
      <InteractiveDotGrid gridSpacing={16} />

      {/* 2. Soft Radial Glowing Backdrops (Slowly animating neon ambient nebulas) */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-[-100px] z-0 pointer-events-none">
        {/* Neon Cyan aura (top right) with floating loop */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.65, 0.8, 0.65]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[5%] w-[550px] h-[550px] rounded-full bg-[#06B6D4]/12 blur-[130px]"
        />
        {/* Neon Purple aura (mid-left) with slow breathing loop */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.55, 0.7, 0.55]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/10 blur-[130px]"
        />
        {/* Neon Blue aura (bottom center) */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.45, 0.6, 0.45]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-[15%] left-1/3 w-[650px] h-[500px] rounded-full bg-[#3B82F6]/9 blur-[150px]"
        />
      </motion.div>

      {/* 3. Floating Glassmorphic Parallax Capsule Cards (Visible on md/lg screens) */}

      {/* 4. Core Hero Text Content & Primary Call-to-Actions */}
      <div
        className="relative z-20 flex flex-col items-center justify-center gap-6 sm:gap-8 text-center w-full max-w-5xl mt-16 sm:mt-0"
      >
        {/* Tech Cyber Badge */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 0px rgba(231, 117, 4, 0)',
                '0 0 16px rgba(231, 117, 4, 0.35)',
                '0 0 0px rgba(231, 117, 4, 0)',
              ],
              borderColor: [
                'rgba(249, 115, 22, 0.25)',
                'rgba(249, 115, 22, 0.55)',
                'rgba(249, 115, 22, 0.25)',
              ]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className='inline-flex items-center gap-2 border border-orange-500/30 bg-orange-950/20
              backdrop-blur-md px-4 py-2 rounded-full shadow-inner'
          >
            {/* Orange blinking cyber dot */}
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-orange-500'></span>
            </span>
            <p className='text-xs font-semibold tracking-wider text-orange-400/90 uppercase'>
              Next-Gen Development Agency
            </p>
          </motion.div>
        </motion.div>

        {/* Cinematic Main Title */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-bold
            leading-tight sm:leading-[1.08] max-w-6xl tracking-tight text-white'>
            Build high-performance <br className="sm:hidden" />
            <span className='bg-gradient-to-r from-orange-400 via-orange-500 to-[#f0a510] bg-clip-text text-transparent
              drop-shadow-[0_2px_15px_rgba(240,165,16,0.25)]'>
              Digital Solutions
            </span> that scale your Business
          </h1>
        </motion.div>

        {/* Secondary Supporting Text (White with soft opacity) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <p className='text-base sm:text-xl font-normal text-white/60
            max-w-3xl pb-2 sm:pb-6 leading-relaxed m-auto px-4 sm:px-0 tracking-wide'>
            Bringing innovative ideas to life as engaging, interactive Digital experiences that spark authentic connections.
          </p>
        </motion.div>

        {/* Premium Neon Glow CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <Link
            to='/contact'
            className='relative overflow-hidden group flex items-center gap-3 bg-gradient-to-r from-[#e77504] to-[#f0a510] text-white px-8 py-3.5 rounded-md font-semibold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 active:translate-y-0 active:scale-95 transition-all duration-300'
          >
            <span className='relative z-10'>Get Started</span>
            <img
              src={assets.arrow_icon}
              alt="arrow"
              className='w-4 h-4 brightness-0 invert relative z-10 group-hover:translate-x-1 transition-transform'
            />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-md" />
          </Link>

          <Link
            to='/services'
            className='inline-flex items-center gap-2 px-9 py-4 rounded-xl font-semibold text-white/90
              backdrop-blur-md bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.15]
              hover:-translate-y-0.5 active:translate-y-0 active:scale-95
              transition-all duration-300 shadow-sm'
          >
            Our Services
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
