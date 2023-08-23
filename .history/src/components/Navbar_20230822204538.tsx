import React from 'react'
import styles from './Navbar.module.scss'
import clsx from 'clsx'
import { title } from '../assets'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <nav className={clsx(styles.navbar)}>
    <div className={clsx(styles.logo)}>
      <img src={title} alt='title' />
      {/* <h1 className={clsx(styles.heading)}>BIG BAD <br/>CARWASH</h1> */}
    </div>

    <div className={clsx(styles.bar)}>
      <ul className={clsx(styles.components)}>
        <li><a>Home</a></li>
        <Link onClick={openNav} to='home'><li><a>About</a></li></Link>
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