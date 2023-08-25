import React from 'react'
import clsx from 'clsx'
import { header, faq } from '../assets'
import styles from './FAQ.module.scss'
import { Navbar, JoinUs, Footer } from '../components'
import $ from 'jquery';

$(document).ready(() => {
  $('.accordion-question').click(function() {
    $(this).parent().toggleClass('active');
  });
});

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
    <section className={clsx(styles.accordion)}>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.oneaccord)}>
          <h2>Membership FAQs</h2>

          <div className={clsx(styles.accord)} id='accordionFlushExample'>
            <div className={clsx(styles.accorditem)}>
              <div className={clsx(styles.accordq)}>
              <h4>What is an Unlimited Membership?</h4>
              </div>
              
              <div className={clsx(styles.collapse)}>
                <div className={clsx(styles.body)}>
                An unlimited membership lets you wash your car as often as you like at any Quick Quack location. You can purchase an unlimited membership for any of our three wash packages. An unlimited membership provides great value and is an easy way to ensure that you Don't Drive Dirty®.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ