import React from 'react'
import clsx from 'clsx'
import styles from '../pages/home.module.scss'

function Memberships() {
    return(
      <section className={clsx(styles.memberships)}>
        <div className={clsx(styles.title)}>
          <span>Unlimited Car Wash Membership Packages</span>
          <p>Members can enjoy easy enrollment, multiple locations, and no long-term commitment like lots of people are afraid of! They can also save more when adding more cars to their plan.</p>
        </div>
  
        <div className={clsx(styles.cards)}>
          <div className={clsx(styles.box)}>
            <div className={clsx(styles.title)}>
              <div className={clsx(styles.header)}>
                <h2>Best Pig</h2>
              </div>
            </div>
            <div className={clsx(styles.best)}>
              <p>• Bonded Protection</p>
              <p>• Long Lasting Shine</p>
              <p>• Weather Resistance</p>
              <p>• Interior Service Cleaning</p>
            </div>
            <div className={clsx(styles.better)}>
              <p>• Triple Foam</p>
              <p>• Wax</p>
              <p>• Undercarriage Wash</p>
              <p>• Wheel and Tire Shine</p>
            </div>
              <div className={clsx(styles.basic)}>
                <p>• Soap</p>
                <p>• Rinse</p>
                <p>• Dry</p>
              </div>
          </div>
  
          <div className={clsx(styles.box)}>
            <div className={clsx(styles.title)}>
              <div className={clsx(styles.header)}>
                <h2>Better Pig</h2>
              </div>
            </div>
            
            <div className={clsx(styles.better)}>
              <p>• Triple Foam</p>
              <p>• Wax</p>
              <p>• Undercarriage Wash</p>
              <p>• Wheel and Tire Shine</p>
            </div>
            <div className={clsx(styles.basic)}>
                <p>• Soap</p>
                <p>• Rinse</p>
                <p>• Dry</p>
              </div>
          </div>
  
          <div className={clsx(styles.box)}>
            <div className={clsx(styles.title)}>
              <div className={clsx(styles.header)}>
                <h2>Basic Pig</h2>
              </div>
            </div>
            <div className={clsx(styles.basic)}>
                <p>• Soap</p>
                <p>• Rinse</p>
                <p>• Dry</p>
              </div>
          </div>
        </div>
      </section>
    )
  }

export default Memberships