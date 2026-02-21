import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import CTA from './components/CTA'
import ScrollToTop from './components/ScrollToTop.jsx'
import WhatsAppBtn from './components/WhatsAppBtn.jsx'
import Loader from './components/Loader.jsx'
import { AnimatePresence } from 'motion/react'
import Analytics from './components/Analytics.jsx';

// Lazy-load page-level routes so they don't block the initial bundle
const AboutPage = lazy(() => import('./pages/About.jsx'))
const ContactPage = lazy(() => import('./pages/Contact.jsx'))
const ServicesPage = lazy(() => import('./pages/Services.jsx'))


const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?
    localStorage.getItem('theme') : 'light')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize GA deferred so it doesn't block initial render
    import('react-ga4').then(({ default: ReactGA }) => {
      ReactGA.initialize('G-6ZJ6JECC2Z')
      ReactGA.send('pageview')
    })

    // Minimal loader – just one frame to mount the app cleanly
    const timer = requestAnimationFrame(() => setLoading(false))
    return () => cancelAnimationFrame(timer)
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
              <Route path='/about' element={<Suspense fallback={null}><AboutPage /></Suspense>} />
              <Route path='/contact' element={<Suspense fallback={null}><ContactPage /></Suspense>} />
              <Route path='/services' element={<Suspense fallback={null}><ServicesPage /></Suspense>} />
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
