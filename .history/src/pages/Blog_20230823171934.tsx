import React from 'react'
import clsx from 'clsx'
import { header } from '../assets'
import styles from './Blog.module.scss'
import { Navbar } from '../components'

const Blog = () => {
  return (
    <section className={clsx(styles.blog)}>
    <img src={header} className={clsx(styles.aboutimage)} />
    <Navbar />
    <div className={clsx(styles.container)}>
      <h1>FAQs</h1>
      <h4>Home/FAQs</h4>
    </div>
  </section>
  )
}

export default Blog