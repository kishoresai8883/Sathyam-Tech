import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
//import TrustedBy from './components/TrustedBy'
import About from './components/About'
import Services from './components/Services'
import OurWork from './components/OurWork'
//import Teams from './components/Teams'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import CTA from './components/CTA'
import AboutPage from './pages/About.jsx'
import ContactPage from './pages/Contact.jsx'
import ServicesPage from './pages/Services.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import WhatsAppBtn from './components/WhatsAppBtn.jsx'
import Loader from './components/Loader.jsx'
import { AnimatePresence } from 'motion/react'
import ReactGA from "react-ga4";
import Analytics from './components/Analytics.jsx';

ReactGA.initialize("G-6ZJ6JECC2Z");
ReactGA.send("pageview");


const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?
    localStorage.getItem('theme') : 'light')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time - adjust duration as needed
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // 2 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  const HomePage = () => (
    <>
      <Hero />
      <About />
      <Services />
      <OurWork />
      <Contact />
      <CTA />
    </>
  )

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <Router>
          <Analytics />
          <div className='dark:bg-black relative overflow-x-hidden'>
            <Toaster />
            <Navbar theme={theme} setTheme={setTheme} />
            <ScrollToTop />
            <WhatsAppBtn />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/services' element={<ServicesPage />}></Route>
              <Route path='*' element={<Navigate to="/" />} />
            </Routes>
            <Footer theme={theme} />
          </div>
        </Router>
      )}
    </>
  )
}

export default App
