import React from 'react'
import styles from './about.module.scss'
import clsx from 'clsx'

const About = () => {
  return (
    <section className={clsx(styles.about)}>
      <div className={clsx(styles.container)}>
        <h4>Home/About</h4>
        <h1>About</h1>
      </div>
    </section>
  )
}

export default About