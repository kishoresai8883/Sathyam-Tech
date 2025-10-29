import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/about_hero.png'

const Contact = () => {
  return (
    <>
      <section 
        className="relative h-[400px] w-full bg-cover bg-center flex items-center"
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
    </>
  )
}

export default Contact
