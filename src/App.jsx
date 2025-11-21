import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, HashRouter, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
//import TrustedBy from './components/TrustedBy'
import About from './components/About'
import Services from './components/Services'
import OurWork from './components/OurWork'
//import Teams from './components/Teams'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster} from 'react-hot-toast'
import CTA from './components/CTA'
import AboutPage from './pages/About.jsx'
import ContactPage from './pages/Contact.jsx'
import ServicesPage from './pages/Services.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?
localStorage.getItem('theme') : 'light')

    const HomePage = () => (
      <>
        <Hero/>
        <About/>
        <Services/>
        <OurWork/>
        <Contact/>
        <CTA/>
    </>
    )
    
    return (
      <HashRouter>
        <div className='dark:bg-black relative'>
          <Toaster/>
          <Navbar theme={theme} setTheme={setTheme}/>
          <ScrollToTop/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/services' element={<ServicesPage/>}></Route>
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
          <Footer theme={theme}/>
        </div>
      </HashRouter>
    )
}

export default App
