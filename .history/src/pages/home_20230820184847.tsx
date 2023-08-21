import styles from "./home.module.scss";
import stylesTw, { layout } from "../style";
import clsx from "clsx";

import { logo, hero } from "../assets";

export function Home() {
  return (
    <>
      <div className={`px-5 ${stylesTw.flexCenter}`}>
        <div className={`${stylesTw.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      < Hero />
    </>
  );
}

//--------------------------------------------------------------------------------------
// Components
//--------------------------------------------------------------------------------------
// import React from 'react'
// import styles, { layout } from '../style'
// import { howto, first, second, third } from '../assets'

function Navbar() {
  return (
    <nav className={clsx(styles.navbar)}>
      <div className={clsx(styles.logo)}>
        <img src={logo} alt='logo' />
        <h1 className={clsx(styles.heading)}>BIG BAD <br/>CARWASH</h1>
      </div>

      <div className={clsx(styles.bar)}>
        <ul className={clsx(styles.components)}>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Membership</a></li>
          <li><a>Locations</a></li>
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
function Hero() {
  return (
    <section className={clsx(styles.hero)}>
      <div className={clsx(styles.header)}>
        <p></p>
      </div>

      <div className={clsx(styles.image)}>
        <img src={hero} alt='hero' />
        </div>
    </section>
  )
}