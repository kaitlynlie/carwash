import React from 'react'
import styles from '../style'
import clsx from 'clsx'
@import '../pages/home.module.scss'

const Navbar = () => {
  return (
    <nav className={clsx(styles.navbar)}>
    <div className={clsx(styles.logo)}>
      <img src={title} alt='title' />
      {/* <h1 className={clsx(styles.heading)}>BIG BAD <br/>CARWASH</h1> */}
    </div>

    <div className={clsx(styles.bar)}>
      <ul className={clsx(styles.components)}>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Membership</a></li>
        <li><a>FAQs</a></li>
        <li><a>Blog</a></li>
        <li><a>Careers</a></li>
      </ul>
    </div>

    <div className={clsx(styles.signin)}>
      <p>Sign In</p>
      <button 
        type="button"
        className={clsx(styles.button)}>
        Register
      </button>
    </div>
  </nav>
  )
}

export default Navbar