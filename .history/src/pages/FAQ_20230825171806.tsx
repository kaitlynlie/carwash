import clsx from 'clsx'
import { header, faq } from '../assets'
import styles from './FAQ.module.scss'
import { Navbar, JoinUs, Footer } from '../components'
import React, { useState, useEffect } from 'react'
import Accordion from './Accordion'

// TODO: finish accordion

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
    <Accord />
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

function Accord() {

  return (
    <section className={clsx(styles.accordion)}>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.content)}>
          <h2>Frequently Asked Questions</h2>
          <div className={clsx(styles.accord)}>
            <div className={clsx(styles.accorditem)}>
              <Accordion
                question="What is special about comparing rental car deals?"
                answer="Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies."
              />
            </div>

            <div className={clsx(styles.accorditem)}>
              <Accordion
                question="How do I find the car rental deals?"
                answer="You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions."
              />
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ