import clsx from "clsx"
import styles from "./Footer.module.scss"
import { twitter, linkedin, facebook, instagram } from "../assets"

function Footer() {
    return(
      <section className={clsx(styles.footer)}>
          <div className={clsx(styles.container)}>     
              <h4>BIG BAD CARWASH</h4>
              <p>
              Copyright © 2023 - 2024 Big Bad Carwash. All rights reserved.
              </p>
              <div className={clsx(styles.icons)}>
                <img src={twitter}/>
                <img src={linkedin}/>
                <img src={facebook}/>
                <img src={instagram}/>
              </div>
          </div>
      </section>
      )
  }

export default Footer;