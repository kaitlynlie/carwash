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
            <h3>Membership FAQs</h3>
            <div className={clsx(styles.accorditem)}>
              <Accordion
                question="What is an unlimited membership?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
            </div>

            <div className={clsx(styles.accorditem)}>
              <Accordion
                question="How do I become a member?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
            </div>

            <div className={clsx(styles.accorditem)}>
              <Accordion
                question="Can I add another vehicle to my membership?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
            </div>
          </div>

          <div className={clsx(styles.accord)}>
            <h3>How Does Our Wash Work?</h3>
            <div className={clsx(styles.accorditem)}>
              <Accordion
                question="What is the process of entering the wash?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
            </div>

            <div className={clsx(styles.accorditem)}>
              <Accordion
                question="Will the wash damage my vehicle?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
            </div>

            <div className={clsx(styles.accorditem)}>
              <Accordion
                question="Is my car too big to enter the wash?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
            </div>
          </div>

          <div className={clsx(styles.accord)}>
            <h3>How Does Our Wash Work?</h3>
            <div className={clsx(styles.accorditem)}>
              <Accordion
                question="What is the process of entering the wash?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
            </div>

            <div className={clsx(styles.accorditem)}>
              <Accordion
                question="Will the wash damage my vehicle?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
            </div>

            <div className={clsx(styles.accorditem)}>
              <Accordion
                question="Is my car too big to enter the wash?"
                answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ