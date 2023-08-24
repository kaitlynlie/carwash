import React from 'react'
import clsx from 'clsx'
import { header } from '../assets'
import { Navbar } from '../components'

const Membership = () => {
  return (
    <>
      <img src={header} className={clsx(styles.aboutimage)} />
      <Navbar />
      <div className={clsx(styles.container)}>
        <h1>About</h1>
        <h4>Home/About</h4>
      </div>
    </>
  )
}

export default Membership