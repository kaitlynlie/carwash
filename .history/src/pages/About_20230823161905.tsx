import React from 'react'
import styles from './about.module.scss'
import clsx from 'clsx'
import { header, hero } from '../assets'
import { Navbar } from '../components'

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
    </section>
  )
}

function WhyUs() {
  return(
    <section className={clsx(styles.whyus)}>
      <div className={clsx(styles.header)}>
        <h4>Nice, clean, and shiny!</h4>
        <h2>Save big with our all new <span>membership deals!</span></h2>
        <p>With unbeatable prices and unlimited washes, we'll give you the shiniest car wash and onto the road quickly. </p>
      </div>

      <div className={clsx(styles.image)}>
        <img src={hero} alt='hero' />
      </div>
    </section>
  )
}

export default About