import clsx from 'clsx'
import { header, faq } from '../assets'
import styles from './FAQ.module.scss'
import { Navbar, JoinUs, Footer } from '../components'
import React, { useState, useEffect } from 'react'

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

  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <section className={clsx(styles.accordion)}>
        <div className={clsx(styles.container)}>
          <div className={clsx(styles.content)}>
            <h2>Frequently Asked Questions</h2>

            <div className={clsx(styles.accord)}>
              <div className={clsx(styles.accorditem)}>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`${clsx(styles.accordq)} ${getClassQuestion("q1")}`}
                >
                  <p>1. What is special about comparing rental car deals?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`${clsx(styles.accorda)} ${getClassAnswer("q1")}`}
                >
                  Comparing rental car deals is important as it helps find the
                  best deal that fits your budget and requirements, ensuring you
                  get the most value for your money. By comparing various
                  options, you can find deals that offer lower prices,
                  additional services, or better car models. You can find car
                  rental deals by researching online and comparing prices from
                  different rental companies.
                </div>
              </div>
              <div className={clsx(styles.accorditem)}>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`${clsx(styles.accordq)} ${getClassQuestion("q2")}`}
                >
                  <p>2. How do I find the car rental deals?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`accorda ${getClassAnswer("q2")}`}
                >
                  You can find car rental deals by researching online and
                  comparing prices from different rental companies. Websites
                  such as Expedia, Kayak, and Travelocity allow you to compare
                  prices and view available rental options. It is also
                  recommended to sign up for email newsletters and follow rental
                  car companies on social media to be informed of any special
                  deals or promotions.
                </div>
              </div>
              <div className="accorditem">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`accordq ${getClassQuestion("q3")}`}
                >
                  <p>3. How do I find such low rental car prices?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`accorda ${getClassAnswer("q3")}`}
                >
                  Book in advance: Booking your rental car ahead of time can
                  often result in lower prices. Compare prices from multiple
                  companies: Use websites like Kayak, Expedia, or Travelocity to
                  compare prices from multiple rental car companies. Look for
                  discount codes and coupons: Search for discount codes and
                  coupons that you can use to lower the rental price. Renting
                  from an off-airport location can sometimes result in lower
                  prices.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FAQ