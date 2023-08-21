import React from 'react'
import { logo } from '../assets'
import styles, { layout } from '../style'

const Footer = () => {
  return (
    <section className={`py-4 overflow w-[100%] h-[100%] dark:bg-slate-900`}>
    <div className={`${layout.sectionInfo} ${styles.flexCenter} w-[100%] h-[100%] overflow min-w-max bg-zinc-800 dark:bg-slate-900 justify-center mt-[187.9px]`}>
    <div className="w-[1100px] h-[42px] justify-start items-center gap-8 inline-flex">
      <img src={logo} alt='logo' className="w-[42px] h-[42px]" />
    <div className="grow shrink basis-0 h-[25px] justify-center items-center gap-8 flex">
      <a href='mailto:d.k.developer@outlook.com' className="text-gray-100 text-[18px] font-normal hidden md:block dark:text-slate-400">Customer Service</a>
      <a href='/safe?action=policy' className="text-gray-100 text-[18px] font-normal hidden md:block dark:text-slate-400">Privacy & Policy</a>
    </div>
      <p className="text-gray-100 text-[18px] font-normal hidden md:block dark:text-slate-400">TapSafe @2023
</p>
    </div>
    </div>
</section>
  )
}

export default Footer