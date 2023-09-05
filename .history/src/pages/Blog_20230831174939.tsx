import React from 'react'
import clsx from 'clsx'
import { header, search } from '../assets'
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
          <div className={clsx(styles.blog)}>
            <img src={search} />
            <div className={clsx(styles.text)}>
              <h4>New Member Perk</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
              <button 
                    type="button"
                    className={clsx(styles.button)}>
                    Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className={clsx(styles.links)}>
          <a></a>
        </div>
      </div>
    </section>
  )
}

export default Blog