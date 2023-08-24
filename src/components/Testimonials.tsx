import clsx from "clsx"
import styles from "./Testimonials.module.scss"
import { person1, person2 } from '../assets'

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
              <h3>"Amazing wash, loved the vaccuums afterwards. Affordable, and my car was super clean afterwards. Love how there's so many locations around me!"</h3>
                  <div className={clsx(styles.customer)}>
                   <img src={person1} />
                      <div className={clsx(styles.text)}>
                          <h4>Valued Customer</h4>
                          <p>Best Pig</p>
                      </div>
                  </div>
          </div>
  
          <div className={clsx(styles.card)}>
              <h3>"I was traveling across the country and had so many bugs on my car, thank goodness for Big Bad Carwash! The staff are also super friendly and helpful."</h3>
                  <div className={clsx(styles.customer)}>
                   <img src={person2}/>
                      <div className={clsx(styles.text)}>
                          <h4>Valued Customer</h4>
                          <p>Better Pig</p>
                      </div>
                  </div>
          </div>
        </div>
      </div>
      </section>
    )
  }

  export default Testimonials