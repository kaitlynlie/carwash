import React from 'react'
import clsx from 'clsx'
import { header } from '../assets'
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
        <h4>Any questions?</h4>
          <h2><span>Frequently Asked Questions</span></h2>
          <p>Customers with memberships save more money. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    
        <div className={clsx(styles.imagebot)}>
          <img src={faq} alt='faq' />
        </div>
      </section>
  )
}

export default Careers