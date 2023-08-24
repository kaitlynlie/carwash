import React from 'react'
import styles from './about.module.scss'
import clsx from 'clsx'
import { header, about } from '../assets'
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

export default About