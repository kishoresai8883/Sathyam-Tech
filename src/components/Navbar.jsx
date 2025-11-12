import {useState} from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from 'motion/react'
import Logo from '../assets/STS-logo-bg-white.png'
import LogoBlk from '../assets/STS-logo-bg-black.png'
import { Link } from 'react-router-dom'

const Navbar = ({theme, setTheme}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  return (
    <>
      <div className="w-full py-2 overflow-hidden bg-black text-white text-sm">
        <div
          className="inline-flex whitespace-nowrap gap-8"
          style={{
            willChange: 'transform',
            animation: 'marquee 18s linear infinite'
          }}
          aria-hidden="false"
        >
          <span className="px-4">⚠️ Site Under Maintenance — Some features may be temporarily unavailable</span>
          <span className="px-4">⚠️ Site Under Maintenance — Some features may be temporarily unavailable</span>
          <span className="px-4">⚠️ Site Under Maintenance — Some features may be temporarily unavailable</span>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: 0.6, ease: 'easeOut'}}
        className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40
          py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
        <Link to="/"><img src={theme === 'dark' ? LogoBlk : Logo} alt="logo" className='w-32 sm:w-40'/></Link>
        <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0
          right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20
          flex sm:items-center gap-5 transition-all`}>
          <img src={assets.close_icon} alt="close" className='w-5 absolute right-4 top-4 sm:hidden' onClick={()=> setSidebarOpen(false)} />
          <Link to='/' onClick={()=> setSidebarOpen(false)} className='sm:hover:border-b sm:hover:border-b-orange-400'>Home</Link>
          <Link to='/about' onClick={()=> setSidebarOpen(false)} className='sm:hover:border-b sm:hover:border-b-orange-400'>About</Link>
          <Link to='/services' onClick={()=> setSidebarOpen(false)} className='sm:hover:border-b sm:hover:border-b-orange-400'>Services</Link>
          <Link to='/contact' onClick={()=> setSidebarOpen(false)} className='sm:hover:border-b sm:hover:border-b-orange-400'>Contact Us</Link>
        </div>
        <div className='flex items-center gap-2 sm:gap-4'>
          <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
          <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="theme toggle" onClick={()=> setSidebarOpen(true)} className="w-8 sm:hidden"/>
          <Link to="/contact" className='text-sm max-sm:hidden flex items-center
            gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 trasition-all'>
            Connect <img src={assets.arrow_icon} width={14} alt='connect button'/>
          </Link>
        </div>
      </motion.div>
    </>
  )
}

export default Navbar
