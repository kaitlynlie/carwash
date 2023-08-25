import React from 'react'
import clsx from 'clsx'
import { header, faq } from '../assets'
import styles from './FAQ.module.scss'
import { Navbar, JoinUs, Footer } from '../components'

const FAQ = () => {
  return (
    <section className={clsx(styles.faq)}>
    <img src={header} className={clsx(styles.aboutimage)} />
    <Navbar />
    <div className={clsx(styles.container)}>
      <h1>FAQs</h1>
      <h4>Home/FAQs</h4>
    </div>
    <FAQs />
    <Accordion />
    <JoinUs />
    <Footer />
  </section>
  )
}

function FAQs() {
  return(
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

function Accordion() {
  return (
    
  )
}

export default FAQ