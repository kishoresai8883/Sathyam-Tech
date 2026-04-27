import React from 'react'
import assets from '../assets/assets'
import { motion, useSpring, useTransform, useMotionValue } from 'motion/react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax offsets: negative moves opposite to mouse, positive moves with mouse
  const bgX = useTransform(smoothMouseX, [-0.5, 0.5], [40, -40]);
  const bgY = useTransform(smoothMouseY, [-0.5, 0.5], [40, -40]);

  const badgeX = useTransform(smoothMouseX, [-0.5, 0.5], [-15, 15]);
  const badgeY = useTransform(smoothMouseY, [-0.5, 0.5], [-15, 15]);

  const titleX = useTransform(smoothMouseX, [-0.5, 0.5], [-30, 30]);
  const titleY = useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30]);

  const paraX = useTransform(smoothMouseX, [-0.5, 0.5], [-45, 45]);
  const paraY = useTransform(smoothMouseY, [-0.5, 0.5], [-45, 45]);

  const btnX = useTransform(smoothMouseX, [-0.5, 0.5], [-60, 60]);
  const btnY = useTransform(smoothMouseY, [-0.5, 0.5], [-60, 60]);

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
      className='relative flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-12
      lg:px-24 xl:px-40 w-full min-h-[100vh] overflow-hidden bg-[#030303] text-white'>

      {/* Fancy dark background grid and gradients with Parallax Effect */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-[-100px] z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-orange-600/15 blur-[120px]"></div>
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#f0a510]/10 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[70%] h-[50%] rounded-full bg-orange-500/10 blur-[150px]"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]"></div>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-8 text-center w-full max-w-6xl">
        <motion.div style={{ x: badgeX, y: badgeY }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              boxShadow: [
                '0 0 0px rgba(231, 117, 4, 0)',
                '0 0 16px rgba(231, 117, 4, 0.4)',
                '0 0 0px rgba(231, 117, 4, 0)',
              ],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.2 },
              y: { duration: 0.5, delay: 0.2 },
              boxShadow: { duration: 2.2, delay: 1, repeat: Infinity, ease: 'easeInOut' },
            }}
            className='inline-flex items-center gap-2 border border-orange-500/40
              bg-orange-950/40 backdrop-blur-md px-5 py-2 rounded-full'
          >
            {/* Pulsing live dot */}
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-orange-500'></span>
            </span>
            <p className='text-sm font-medium text-orange-300'>Revolutionize Workflow</p>
          </motion.div>
        </motion.div>

        <motion.div style={{ x: titleX, y: titleY }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-semibold
              sl:leading-[1.1] max-w-6xl tracking-tight'>We build high-performance <span className='bg-gradient-to-r from-orange-400 via-orange-500 to-[#f0a510] bg-clip-text
              text-transparent'>Digital Solutions</span> that scale your Business</motion.h1>
        </motion.div>

        <motion.div style={{ x: paraX, y: paraY }}>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='text-base sm:text-xl font-medium text-white/70
              max-w-3xl pb-6 leading-relaxed m-auto'>Bringing innovative ideas to life as engaging, interactive Digital experiences that spark authentic connections.</motion.p>
        </motion.div>

        {/* Contact Button */}
        <motion.div style={{ x: btnX, y: btnY }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <Link
              to='/contact'
              className='inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-semibold text-white
                bg-gradient-to-r from-[#e77504] to-[#f0a510]
                shadow-md shadow-orange-300 dark:shadow-orange-900/30
                hover:shadow-lg dark:shadow-orange-300 dark:hover:shadow-orange-800/40
                hover:-translate-y-0.5 active:translate-y-0
                transition-all duration-200'
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
