import React from 'react'
import clsx from 'clsx'
import { header, membership, memreasons } from '../assets'
import { Navbar, JoinUs, Footer, Memberships } from '../components'
import styles from './Membership.module.scss'

const Membership = () => {
  return (
    <section className={clsx(styles.membership)}>
      <img src={header} className={clsx(styles.aboutimage)} />
      <Navbar />
      <div className={clsx(styles.container)}>
        <h1>Membership</h1>
        <h4>Home/Membership</h4>
      </div>
      <WhyMem />
      <Reasons />
      <Memberships />
      <JoinUs />
      <Footer />
    </section>
  )
}

function WhyMem() {
  return(
    <section className={clsx(styles.whymem)}>
      <div className={clsx(styles.imagetop)}>
        <img src={membership} alt='membership' />
      </div>

      <div className={clsx(styles.container)}>
        <h4>Nice, clean, and shiny!</h4>
        <h2>Why choose a <span>Membership?</span></h2>
        <p>Customers with memberships save more money. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div className={clsx(styles.imagebot)}>
        <img src={membership} alt='membership' />
      </div>
    </section>
  )
}

function Reasons() {
  return(
    <section className={clsx(styles.whymem)}>

      <div className={clsx(styles.container)}>
        <h4>Nice, clean, and shiny!</h4>
        <h2>Why choose a <span>Membership?</span></h2>
        <p>Customers with memberships save more money. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <div className={clsx(styles.image)}>
        <img src={memreasons} alt='membership reasons' />
      </div>
    </section>
  )
}

export default Membership