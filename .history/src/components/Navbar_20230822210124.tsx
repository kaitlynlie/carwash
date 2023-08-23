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
      <Link onClick={openNav} to='/'><li><a>Home</a></li></Link>
        <Link onClick={openNav} to='about'><li><a>About</a></li></Link>
        <Link onClick={openNav} to='membership'><li><a>Membership</a></li></Link>
        <Link onClick={openNav} to='faq'><li><a>FAQs</a></li></Link>
        <Link onClick={openNav} to='blog'><li><a>Blog</a></li></Link>
        <Link onClick={openNav} to='careers'><li><a>Careers</a></li></Link>
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