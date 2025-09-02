import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme, setTheme}) => {
    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'));
    },[])

    useEffect(() => {
        if(theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])
  return (
    <>
      <button>
        {theme === 'dark' ? (
            <img src={assets.sun_icon} alt="theme-toggle" onClick={()=>setTheme('light')}
            className='size-8.5 p-1.5 border border-gray-500 rounded-full' />
        ) : (
            <img src={assets.moon_icon} alt="theme-toggle" onClick={()=>setTheme('dark')}
            className='size-8.5 p-1.5 border border-gray-500 rounded-full'/>
        ) }
      </button>
    </>
  )
}

export default ThemeToggleBtn
