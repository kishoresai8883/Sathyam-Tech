import { useState } from 'react'
import assets from '../assets/assets'
import { ThemeToggleBtn } from './ThemeToggleBtn'
import { motion, AnimatePresence } from 'motion/react'
import Logo from '../assets/Mylogo_bg_trans.png'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
]

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const closeSidebar = () => setSidebarOpen(false)

  return (
    <>
      {/* ── Top Navbar ── */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40
          py-2 fixed top-0 left-0 right-0 z-50 backdrop-blur-xl font-medium bg-gray-100 dark:bg-transparent">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            width={176}
            height={58}
            loading="eager"
            style={{ aspectRatio: '176/58', height: 'auto' }}
            className='w-36 sm:w-44'
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden sm:flex sm:items-center gap-5 font-bold sm:text-md">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className='nav-link relative transition-all duration-300 text-gray-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 group'
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300 ease-out" />
            </Link>
          ))}
        </div>

        <div className='flex items-center gap-2 sm:gap-4'>
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          {/* Hamburger — mobile only */}
          <img
            src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
            alt="open menu"
            onClick={() => setSidebarOpen(true)}
            className="w-8 sm:hidden cursor-pointer"
          />

          {/* Desktop CTA */}
          <div className='hidden sm:flex'>
            <Link to='/contact' className='relative overflow-hidden group flex items-center gap-3 bg-gradient-to-r from-[#e77504] to-[#f0a510] text-white px-6 py-2 rounded-full font-semibold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300'>
              <span className='relative z-10'>Connect</span>
              <motion.img
                src={assets.arrow_icon}
                alt="arrow"
                className='w-4 h-4 brightness-0 invert relative z-10 group-hover:translate-x-1 transition-transform'
              />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* ── Mobile Sidebar — slides down from top ── */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            key="mobile-sidebar"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.38, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex flex-col sm:hidden
              bg-white dark:bg-gray-900 text-gray-700 dark:text-white"
          >
            {/* Header row inside sidebar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
              <Link to="/" onClick={closeSidebar}>
                <img src={Logo} alt="logo" className='w-32' />
              </Link>
              <button
                onClick={closeSidebar}
                aria-label="Close menu"
                className="w-9 h-9 flex items-center justify-center rounded-full
                  bg-gray-400 dark:bg-gray-400 hover:bg-orange-50 dark:hover:bg-orange-950/30
                  transition-colors"
              >
                <img
                  src={assets.close_icon}
                  alt="close"
                  className={`w-4 h-4 ${theme === 'dark' ? 'invert' : ''}`}
                />
              </button>
            </div>

            {/* Nav links — vertically centered */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map(({ label, to }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.3 }}
                >
                  <Link
                    to={to}
                    onClick={closeSidebar}
                    className="text-2xl font-bold tracking-wide text-gray-900 dark:text-white hover:text-orange-500
                      dark:hover:text-orange-400 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* ── Bottom contact info ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              className="border-t border-gray-100 dark:border-gray-800 px-6 py-5 space-y-3"
            >
              {/* Phone */}
              <a
                href="tel:+919502908883"
                className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400
                  hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-50 dark:bg-orange-950/30 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                +91 9502908883
              </a>

              {/* Email */}
              <a
                href="mailto:info@sathyamtechsolutions.com"
                className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400
                  hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-50 dark:bg-orange-950/30 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                info@sathyamtechsolutions.com
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-4 pt-1">
                <a href="https://www.linkedin.com/in/kishore-sai" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800
                    hover:bg-orange-500 transition-colors duration-200 group">
                  <img src={assets.linkedin_icon} alt="LinkedIn" width={18} height={18}
                    className="w-4 h-4 group-hover:brightness-0 group-hover:invert transition-all" />
                </a>
                <a href="https://instagram.com/sathyamtechsolutions" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800
                    hover:bg-orange-500 transition-colors duration-200 group">
                  <img src={assets.instagram_icon} alt="Instagram" width={18} height={18}
                    className="w-4 h-4 group-hover:brightness-0 group-hover:invert transition-all" />
                </a>
                <a href="https://twitter.com/Sai207Sai" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800
                    hover:bg-orange-500 transition-colors duration-200 group">
                  <img src={assets.twitter_icon} alt="Twitter" width={18} height={18}
                    className="w-4 h-4 group-hover:brightness-0 group-hover:invert transition-all" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800
                    hover:bg-orange-500 transition-colors duration-200 group">
                  <img src={assets.facebook_icon} alt="Facebook" width={18} height={18}
                    className="w-4 h-4 group-hover:brightness-0 group-hover:invert transition-all" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
