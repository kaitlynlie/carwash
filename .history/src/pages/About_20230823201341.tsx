import React from 'react'
import styles from './about.module.scss'
import clsx from 'clsx'
import { header, about, fast, clean } from '../assets'
import { Footer, JoinUs, Navbar } from '../components'
import Testimonials from '../components/Testimonials'

const About = () => {
  return (
    <section className={clsx(styles.about)}>
      <img src={header} className={clsx(styles.aboutimage)} />
      <Navbar />
      <div className={clsx(styles.container)}>
        <h1>About</h1>
        <h4>Home/About</h4>
      </div>

      <WhyUs />
      <Reasons />
      <Testimonials />
      <JoinUs />
      <Footer />
    </section>
  )
}

function WhyUs() {
  return(
    <section className={clsx(styles.whyus)}>
      <div className={clsx(styles.image)}>
        <img src={about} alt='about' />
      </div>

      <div className={clsx(styles.container)}>
        <h4>Nice, clean, and shiny!</h4>
        <h2>Why choose <span>Big Bad Carwash?</span></h2>
        <p>We make car washing quick, easy, and fun. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </section>
  )
}

function Reasons() {
  return(
    <section className={clsx(styles.reasons)}>
    <div className={`${styles.innerWidth} md:px-[100px] mb-0 items-center flex-row max-[1234px]:flex-col flex justify-between`}>
      <div className='grid grid-cols-2 grid-rows-2 w-full max-[620px]:grid-cols-1'>
        <div className='w-full bg-gray-300 h-[20rem] flex flex-col justify-center items-center text-center px-[100px] max-[1151px]:px-[10px]'>
          <span className="font-extrabold text-black text-[20px]">THE TEAM</span>
          <p className="text-[14px] text-black">Here at GALAXIA, our goal is to create the best PCs in the galaxy, and each one of us has a deep passion and takes pride in building and designing PCs. We are working to build top performance PCs that you will love, and we will enjoy the process of it.</p>
        </div>

      <div className='w-full bg-gray-300 h-[20rem]'>
        <img
          src={fast}
          alt="fast"
          className="z-10 w-full h-full bg-center"
        />
      </div>

      <div className='w-full bg-gray-300 h-[20rem]'>
      <img
          src={clean}
          alt="clean"
          className="z-10 w-full h-full object-cover bg-center"
        />
      </div>

      <div className='w-full bg-gray-300 h-[20rem] flex flex-col justify-center items-center text-center px-[100px] max-[1151px]:px-[10px]'>
          <span className="font-extrabold text-black text-[20px]">THE HISTORY</span>
          <p className="text-[14px] text-black">Here at GALAXIA, our goal is to create the best PCs in the galaxy, and each one of us has a deep passion and takes pride in building and designing PCs. We are working to build top performance PCs that you will love, and we will enjoy the process of it.</p>
        </div>
      </div>
  </div>
</section>
  )
}

export default About