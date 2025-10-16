import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import About from './components/About'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster} from 'react-hot-toast'
import CTA from './components/CTA'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?
localStorage.getItem('theme') : 'light')
  return (
    <div className='dark:bg-black relative'>
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
      <About/>
      <Services/>
      <OurWork/>
      <Teams/>
      <Contact/>
      <CTA/>
      <Footer theme={theme}/>
    </div>
  )
}

export default App
