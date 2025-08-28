import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils';

const ThemeToggle = () => {
const [isDarkMode, setDarkMode] = useState(true);

useEffect(()=>{
  let storedTheme = localStorage.getItem('theme');
  if(storedTheme === 'dark'){
    document.documentElement.classList.add('dark');
     setDarkMode(true);
  }else{
    document.documentElement.classList.remove('dark');
    setDarkMode(false);
  }
}, [])

const toggleTheme = () =>{
  if(isDarkMode){
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme','dark');
    setDarkMode(false);
  } else{
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme','dark');
    setDarkMode(true);
  }
}
  return (
   <button onClick={toggleTheme} className={cn(
    "fixed top-5 right-5 max-sm:hidden z-50 p-2 rounded-full transition-colors duration-300",
    "focus:outline-hidden"
   )}>
   {
    isDarkMode ? <Sun className='h-6 w-6 text-yellow-300'/> : <Moon className='h-6 w-6 text-blue-900'/>
   } 
   </button>
  )
}

export default ThemeToggle
