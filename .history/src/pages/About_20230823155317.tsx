import React from 'react'
import styles from './about.module.scss'
import clsx from 'clsx'
import { header } from '../assets'
import { Navbar } from '../components'

const About = () => {
  return (
    <Navbar />
    <section className={clsx(styles.about)}>
      <div className={clsx(styles.container)}>
        <h1>About</h1>
        <h4>Home/About</h4>
      </div>
    </section>
  )
}

export default About