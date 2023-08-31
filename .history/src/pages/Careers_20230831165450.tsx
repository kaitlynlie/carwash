import React from 'react'
import clsx from 'clsx'
import { header, search, description } from '../assets'
import styles from './Careers.module.scss'
import { Navbar, JoinUs, Footer } from '../components'

const Careers = () => {
  return (
    <section className={clsx(styles.careers)}>
    <img src={header} className={clsx(styles.aboutimage)} />
    <Navbar />
    <div className={clsx(styles.container)}>
      <h1>Careers</h1>
      <h4>Home/Careers</h4>
    </div>
    <Description />
    <Search />
    <Joblist />
    <JoinUs />
    <Footer />
  </section>
  )
}

function Description() {
  return (
    <section className={clsx(styles.description)}>
      <div className={clsx(styles.imagetop)}>
        <img src={description} alt='description' />
      </div>
    
      <div className={clsx(styles.container)}>
        <h4>Working with Us</h4>
          <h2><span>Work Benefits</span></h2>
          <h4>Both full-time and part-time positions are eligible for these great benefits: </h4>
            
            <p>• 401(k) <br />
            • Competitive Wages <br />
            • Health Insurance <br />
            • Paid Holidays <br />
            • Paid Time Off <br />
            • Flexible Schedule <br />
            • Referral Bonuses<br /></p>
        </div>
    
        <div className={clsx(styles.imagebot)}>
          <img src={description} alt='description' />
        </div>
      </section>
  )
}

function Search() {
  return (
    <section className={clsx(styles.search)}>
      <div className={clsx(styles.container)}>
        <h4>Find us at a location near you!</h4>
          <h2><span>Job Locations</span></h2>
          <h4>With our multiple positions available, you can apply to the one closest to you! </h4>
          <div className={clsx(styles.search)}>
              <input type="text" name="zipcode" placeholder="Enter ZIP code" id='zipcode' pattern="[0-9]{5}" title="Five digit zip code"/>
            </div>
            {/* <p>• 401(k) <br />
            • Competitive Wages <br />
            • Health Insurance <br />
            • Paid Holidays <br />
            • Paid Time Off <br />
            • Flexible Schedule <br />
            • Referral Bonuses<br /></p> */}
        </div>
    
        <div className={clsx(styles.image)}>
          <img src={search} alt='search' />
        </div>
      </section>
  )
}

function Joblist() {
  return(
    <section className={clsx(styles.joblist)}>
      <div className={clsx(styles.container)}>
      <div className={clsx(styles.jobheader)}>
        <div className={clsx(styles.header)}>
          <h4>Position</h4>
        </div>
        <div className={clsx(styles.header)}>
          <h4>Location</h4>
        </div>
      </div>
      <div className={clsx(styles.jobwrapper)}>
        <div className={clsx(styles.jobwrapperinside)}>
          <div className={clsx(styles.single)}>
            <div className={clsx(styles.title)}>
              <a>Team Member</a>
            </div>
            <div className={clsx(styles.title)}>
              <a>Hayward, CA</a>
            </div>
          </div>

          <div className={clsx(styles.single)}>
            <div className={clsx(styles.title)}>
              <a>Assistant Manager</a>
            </div>
            <div className={clsx(styles.title)}>
              <a>Fresno, CA</a>
            </div>
          </div>

          <div className={clsx(styles.single)}>
            <div className={clsx(styles.title)}>
              <a>Manager</a>
            </div>
            <div className={clsx(styles.title)}>
              <a>Austin, TX</a>
            </div>
          </div>

          <div className={clsx(styles.single)}>
            <div className={clsx(styles.title)}>
              <a>Electrician</a>
            </div>
            <div className={clsx(styles.title)}>
              <a>Sonoma, CA</a>
            </div>
          </div>

          <div className={clsx(styles.single)}>
            <div className={clsx(styles.title)}>
              <a>Team Member</a>
            </div>
            <div className={clsx(styles.title)}>
              <a>Davis, CA</a>
            </div>
          </div>

          <div className={clsx(styles.single)}>
            <div className={clsx(styles.title)}>
              <a>Electrician</a>
            </div>
            <div className={clsx(styles.title)}>
              <a>Hayward, CA</a>
            </div>
          </div>

          <div className={clsx(styles.single)}>
            <div className={clsx(styles.title)}>
              <a>Assistant Manager</a>
            </div>
            <div className={clsx(styles.title)}>
              <a>Chicago, IL</a>
            </div>
          </div>

          <div className={clsx(styles.single)}>
            <div className={clsx(styles.title)}>
              <a>Electrician</a>
            </div>
            <div className={clsx(styles.title)}>
              <a>Austin, TX</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Careers