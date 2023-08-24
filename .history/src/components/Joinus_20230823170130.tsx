import React from 'react'
import clsx from 'clsx'
import styles from './JoinUs.module.scss'
import { member } from '../assets'

function JoinUs() {
    return(
      <section className={clsx(styles.joinus)}>
        <div className={clsx(styles.box)}>
          <div className={clsx(styles.container)}>
            <div className={clsx(styles.signup)}>
                  <h4>Become a member today!</h4>
                  <p className="text-[20px] mt-6">Sign up today for unlimited car washes and amazing service</p>  
                  <button 
                    type="button"
                    className={clsx(styles.button)}>
                    Sign Up
                  </button>
                  </div>
                  <div className={clsx(styles.image)}>
                    <img src={member} alt='member' />
                  </div>
          </div>
          </div>
      </section>
    )
  }

export default JoinUs;