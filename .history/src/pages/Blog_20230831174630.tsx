import React from 'react'
import clsx from 'clsx'
import { header } from '../assets'
import styles from './Blog.module.scss'
import { Navbar, JoinUs, Footer } from '../components'

const Blog = () => {
  return (
    <section className={clsx(styles.blog)}>
    <img src={header} className={clsx(styles.aboutimage)} />
    <Navbar />
    <div className={clsx(styles.container)}>
      <h1>Blog</h1>
      <h4>Home/Blog</h4>
    </div>
    <Blogs />
    <JoinUs />
    <Footer />
  </section>
  )
}

function Blogs() {
  return (
    <section className={clsx(styles.blogs)}>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.grid)}>
          
        </div>
        <div className={clsx(styles.links)}>
          <a></a>
        </div>
      </div>
    </section>
  )
}

export default Blog