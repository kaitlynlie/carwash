import React from 'react'
import clsx from 'clsx'
import { header } from '../assets'
import styles from './Careers.module.scss'
import { Navbar } from '../components'

const Careers = () => {
  return (
    <section className={clsx(styles.careers)}>
    <img src={header} className={clsx(styles.aboutimage)} />
    <Navbar />
    <div className={clsx(styles.container)}>
      <h1>Blog</h1>
      <h4>Home/Blog</h4>
    </div>
  </section>
  )
}

export default Careers