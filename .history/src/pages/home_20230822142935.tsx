import styles from "./home.module.scss";
import stylesTw, { layout } from "../style";
import clsx from "clsx";

import { logo, hero, tracks, location, bubbles, rain, person1, person2 } from "../assets";

export function Home() {
  return (
    <>
      <div className={`px-5 ${stylesTw.flexCenter}`}>
        <div className={`${stylesTw.boxWidth}`}>
          <img
            src={tracks}
            alt='tracks'
            className={clsx(styles.tracks)}
          />
          <Navbar />
        </div>
      </div>
      < Hero />
      <Location />
      <img
            src={bubbles}
            alt='bubbles'
            className={clsx(styles.bubbles)}
          />
      <Memberships />
      <Testimonials />
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
        <h4>Nice, clean, and shiny!</h4>
        <h2>Save big with our all new <span>membership deals!</span></h2>
        <p>With unbeatable prices and unlimited washes, we'll give you the shiniest car wash and onto the road quickly. </p>
        <button 
          type="button"
          className={clsx(styles.button)}>
          See Plans
        </button>
        <button 
          type="button"
          className={clsx(styles.learn)}>
          Learn More
        </button>
      </div>

      <div className={clsx(styles.image)}>
        <img src={hero} alt='hero' />
      </div>
    </section>
  )
}

function Location() {
  return (
    <section className={clsx(styles.location)}>
      <div className={clsx(styles.box)}>
        <div className={clsx(styles.container)}>
          <div className={clsx(styles.image)}>
            <img src={location} alt='location' />
          </div>

          <div className={clsx(styles.text)}>
            <h4>More than 500 car wash locations</h4>
            <h2>Where you can come for a quick clean</h2>
            <p>Find a location near you:</p>
            <div className={clsx(styles.search)}>
              <input type="text" name="zipcode" placeholder="Enter ZIP code" id='zipcode' pattern="[0-9]{5}" title="Five digit zip code"/>
            </div>
            <p>California • Texas • Utah • Florida • New York </p>
          </div>
        </div>
      </div>
    </section>
  )
}

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

function Testimonials() {
  return(
    <section className={clsx(styles.testimonials)}>
      <div className={clsx(styles.container)}>
        <h4>REVIEWS</h4>
        <div className={clsx(styles.title)}>
            <h2>Testimonials by our Customers</h2>
            <p>Our customers have experienced our service and results, and they are eager to share their positive experience with you.</p>  
      </div>

      <div className={clsx(styles.cards)}>
        <div className={clsx(styles.card)}>
            <h4>"Been using it for a few months now. PC looks great and runs every game I play very nicely. Customer service was top notch, had great communication all the way."</h4>
                <div className={clsx(styles.customer)}>
                 <img src={person1} />
                    <div className='flex flex-col mb-10'>
                        <p className='mt-10 font-bold'>Valued Customer</p>
                        <p>Nereid</p>
                    </div>
                </div>
        </div>

        <div className={clsx(styles.card)}>
            <h4>"Works great, fast, and quiet. Shipped super secure. No problems with it for streaming any game. Very glad with our selection and happy with purchase."</h4>
                <div className='flex-row flex mt-2'>
                 <img src={person2} className='w-[50px] h-[50px] mx-10 mt-10'/>
                    <div className='flex flex-col mb-10'>
                        <p className='mt-10 font-bold'>Valued Customer</p>
                        <p>Triton</p>
                    </div>
                </div>
        </div>
      </div>
    </div>
    </section>
  )
}