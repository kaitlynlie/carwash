import React from 'react'
import styles from './about.module.scss'
import clsx from 'clsx'
import { header, about, fast, clean, detailed, guaranteed, reasons } from '../assets'
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
      {/* TODO: make reasons nicer */}
      {/* TODO: smaller screens check */}   
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
      <div className={clsx(styles.imagetop)}>
        <img src={about} alt='about' />
      </div>

      <div className={clsx(styles.container)}>
        <h4>Nice, clean, and shiny!</h4>
        <h2>Why choose <span>Big Bad Carwash?</span></h2>
        <p>We make car washing quick, easy, and fun. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div className={clsx(styles.imagebot)}>
        <img src={about} alt='about' />
      </div>
    </section>
  )
}

function Reasons() {
  return(
    <section className={clsx(styles.reasons)}>
    <div className={clsx(styles.container)}>
      <div className={clsx(styles.grid)}>
        <div className={clsx(styles.box)}>
          <h2>FAST</h2>
          <h3>We'll get you cleaned and back on the road in a jiffy.</h3>

        <div className={clsx(styles.text)}>
          <h4>Three Minutes</h4>
          <p>• Your car will be cleaned, shined, and dried in under 3 minutes</p>

          <h4>Fast Lanes</h4>
          <p>• Duis aute irure dolor in reprehenderit in voluptate velit esse</p>

          <h4>Quick Service</h4>
          <p>• Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
          </div>
        </div>

      <div className={`${clsx(styles.image)} mb-10`}>
        <img
          src={fast}
          alt="fast"
        />
      </div>

      <div className={clsx(styles.image)}>
      <img
          src={clean}
          alt="clean"
        />
      </div>

      <div className={`${clsx(styles.box)} mb-10`}>
      <h2>CLEAN</h2>
          <h3>We'll get you cleaned and back on the road in a jiffy.</h3>

          <div className={clsx(styles.text)}>
          <h4>Three Minutes</h4>
          <p>• Your car will be cleaned, shined, and dried in under 3 minutes</p>

          <h4>Fast Lanes</h4>
          <p>• Duis aute irure dolor in reprehenderit in voluptate velit esse</p>

          <h4>Quick Service</h4>
          <p>• Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
          </div>
        </div>

        <div className={clsx(styles.box)}>
          <h2>DETAILED</h2>
          <h3>We'll get you cleaned and back on the road in a jiffy.</h3>

          <div className={clsx(styles.text)}>
          <h4>Three Minutes</h4>
          <p>• Your car will be cleaned, shined, and dried in under 3 minutes</p>

          <h4>Fast Lanes</h4>
          <p>• Duis aute irure dolor in reprehenderit in voluptate velit esse</p>

          <h4>Quick Service</h4>
          <p>• Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
          </div>
        </div>

        <div className={`${clsx(styles.image)} mb-10`}>
        <img
          src={detailed}
          alt="detailed"
        />
      </div>

      <div className={clsx(styles.image)}>
      <img
          src={guaranteed}
          alt="guaranteed"
        />
      </div>

      <div className={clsx(styles.box)}>
      <h2>GUARANTEED</h2>
          <h3>We'll get you cleaned and back on the road in a jiffy.</h3>

          <div className={clsx(styles.text)}>
          <h4>Three Minutes</h4>
          <p>• Your car will be cleaned, shined, and dried in under 3 minutes</p>

          <h4>Fast Lanes</h4>
          <p>• Duis aute irure dolor in reprehenderit in voluptate velit esse</p>

          <h4>Quick Service</h4>
          <p>• Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
          </div>
        </div>
      </div>
  </div>
</section>
  )
}

export default About