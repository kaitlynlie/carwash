import React from 'react'
import { logo, sun } from '../assets';
import { useState, useEffect } from "react";

const Navbar = () => {

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  
  return (
    <nav className='w-full flex flex-row py-6 justify-between items-center navbar'>
      <div className='flex flex-row items-center'>
        <img src={logo} alt='logo' className='h-[20%] w-[20%]'/>
        <h2 className='text-black dark:text-orange text-[26px] font-medium pl-3 '>TapSafe</h2>
      </div>

      <div id='theme-switcher' onClick={handleThemeSwitch}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id='icon-sun'>
          <path d="M12 2V4.02908M12 19.9709V22M2 12H4.02908M19.9709 12H22M4.92893 4.92893L6.36371 6.36371M17.6363 17.6363L19.0711 19.0711M19.068 4.92969L17.6332 6.36446M6.36066 17.637L4.92588 19.0718M16.7059 12C16.7059 14.599 14.599 16.7059 12 16.7059C9.40101 16.7059 7.29412 14.599 7.29412 12C7.29412 9.40101 9.40101 7.29412 12 7.29412C14.599 7.29412 16.7059 9.40101 16.7059 12Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id='icon-moon'>
          <path d="M15.1024 9.6161C13.7043 10.0716 12.1369 10.0185 10.6991 9.34808C7.70716 7.95292 6.40246 4.40957 7.76512 1.41092C5.40094 1.61964 3.20947 3.04856 2.13431 5.35426C0.530142 8.7944 2.01849 12.8836 5.45864 14.4878C8.89878 16.0919 12.988 14.6036 14.5922 11.1634C14.8277 10.6584 14.9966 10.1393 15.1024 9.6161Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>



      </div>
    </nav>
  )
}

export default Navbar;
