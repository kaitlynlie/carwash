import React from 'react'
import clsx from 'clsx'
import { header } from '../assets'
import { Navbar } from '../components'
import styles from './Membership.module.scss'

const Membership = () => {
  return (
    <section className={clsx(styles.membership)}>
      <img src={header} className={clsx(styles.aboutimage)} />
      <Navbar />
      <div className={clsx(styles.container)}>
        <h1>membership</h1>
        <h4>Home/About</h4>
      </div>
    </section>
  )
}

export default Membership