import React from 'react'
import styles from './Navbar.module.scss'
import clsx from 'clsx'
import { title } from '../assets'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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

    <div className="relative pointer max-[912px]:block hidden z-10">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="flex justify-end items-end flex-col text-end bg-[#026884ce] p-3 absolute top-[40px] right-[10px] mt-1 rounded-[5px] shadow z-10">
          <div className="none">
            <ul className='flex justify-end items-end flex-col text-white text-end p-1'>
              <Link onClick={openNav} to='/'><li className="pointer"><a>Home</a></li></Link>
              <Link onClick={openNav} to='/pc'><li className="mt-2 pointer"><a>Gaming PCs</a></li></Link>
              <Link onClick={openNav} to='/community'><li className="mt-2 pointer"><a>Community</a></li></Link>
              <Link onClick={openNav} to='/creator'><li className="mt-2 pointer"><a>Creator Program</a></li></Link>
            </ul>
          </div>
        </div>
        )}
        </div>
  </nav>
  )
}

export default Navbar