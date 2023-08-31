import React from 'react'
import clsx from 'clsx'
import { header, faq } from '../assets'
import styles from './Careers.module.scss'
import { Navbar, JoinUs, Footer } from '../components'

const Careers = () => {
  return (
    <section className={clsx(styles.careers)}>
    <img src={header} className={clsx(styles.aboutimage)} />
    <Navbar />
    <div className={clsx(styles.container)}>
      <h1>Careers</h1>
      <h4>Home/Careers</h4>
    </div>
    <Description />
    <JoinUs />
    <Footer />
  </section>
  )
}

function Description() {
  return (
    <section className={clsx(styles.faqs)}>
      <div className={clsx(styles.imagetop)}>
        <img src={faq} alt='faq' />
      </div>
    
      <div className={clsx(styles.container)}>
        <h4>Working with Us</h4>
          <h2><span>Work Benefits</span></h2>
          <p>Both full-time and part-time positions are eligible for these great benefits: <br />
            • 401(k)
            • Competitive Wages
            • Health Insurance
            • Dental
            Vision
            Paid Holidays
            Paid Time Off
            Flexible Schedule
            Referral Bonuses.</p>
        </div>
    
        <div className={clsx(styles.imagebot)}>
          <img src={faq} alt='faq' />
        </div>
      </section>
  )
}

export default Careers