import React from 'react'
import clsx from 'clsx'
import { header } from '../assets'
import styles from './FAQ.module.scss'
import { Navbar } from '../components'

const FAQ = () => {
  return (
    <section className={clsx(styles.membership)}>
    <img src={header} className={clsx(styles.aboutimage)} />
    <Navbar />
    <div className={clsx(styles.container)}>
      <h1>Membership</h1>
      <h4>Home/Membership</h4>
    </div>
  </section>
  )
}

export default FAQ