import styles from "./home.module.scss";
import stylesTw, { layout } from "../style";
import clsx from "clsx";
import {
  howtoBg,
  // howtoFr,
  first,
  second,
  third,
  logo,
  decryption,
  decryptionBg,
  synchronization,
  synchronizationBg,
  howtoDk,
  howto,
  firstDk,
  secondDk,
  thirdDk,
  decryptionDk,
  header,
  headerDk,
  windowsicon,
  macicon,
  chromeicon,
  iosicon,
  androidicon,
  windowsDk,
  macDk,
  chromeDk,
  iosDk,
  androidDk,
  headerbg,
  apple,
  download,
  chrome,
  appstore,
  android,
  lightapple
} from "../assets";
//import Download from "../components/Download";
//import Footer from "../components/Footer";
import { useEffect } from "react";
import { debugLog } from "../utils/debugLog";
// import Header from "../components/Header";
// import HowTo from "../components/HowTo";
// import Navbar from "../components/Navbar";
// import Synchronization from "../components/Synchronization";

const TAG = "Home";
//--------------------------------------------------------------------------------------
// Controllers
//--------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------
// View
//--------------------------------------------------------------------------------------
export function Home() {
  return (
    <>
      <div className={`px-5 ${stylesTw.flexCenter}`}>
        <div className={`${stylesTw.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Header />
      <Encryption />
      <HowTo />
      <Synchronization />
      <Download />
      <Footer />
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
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  function handleThemeSwitch() {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      theme = "light";
    } else {
      document.documentElement.classList.remove("dark");
      theme = "dark";
    }
  }
  handleThemeSwitch();

  debugLog(TAG, "render", {
    theme,
    classList: document.documentElement.classList,
  });

  return (
    <nav className={clsx(styles.navbar)}>
      <div className={clsx(styles.logo)}>
        <img src={logo} alt="logo" className={clsx(styles.img)} />
        <h1 className={clsx(styles.heading)}>Gan Jing Safe</h1>
      </div>

      <div
        id="theme-switcher"
        onClick={() => handleThemeSwitch()}
        className={clsx(styles.themeswitch)}
      >
        <svg
          className={clsx(styles.sun)}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          id="icon-sun"
        >
          <path
            d="M12 2V4.02908M12 19.9709V22M2 12H4.02908M19.9709 12H22M4.92893 4.92893L6.36371 6.36371M17.6363 17.6363L19.0711 19.0711M19.068 4.92969L17.6332 6.36446M6.36066 17.637L4.92588 19.0718M16.7059 12C16.7059 14.599 14.599 16.7059 12 16.7059C9.40101 16.7059 7.29412 14.599 7.29412 12C7.29412 9.40101 9.40101 7.29412 12 7.29412C14.599 7.29412 16.7059 9.40101 16.7059 12Z"
            stroke="white"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          className={clsx(styles.moon)}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          id="icon-moon"
        >
          <path
            d="M15.1024 9.6161C13.7043 10.0716 12.1369 10.0185 10.6991 9.34808C7.70716 7.95292 6.40246 4.40957 7.76512 1.41092C5.40094 1.61964 3.20947 3.04856 2.13431 5.35426C0.530142 8.7944 2.01849 12.8836 5.45864 14.4878C8.89878 16.0919 12.988 14.6036 14.5922 11.1634C14.8277 10.6584 14.9966 10.1393 15.1024 9.6161Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          className={clsx(styles.sunDk)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            d="M7.99967 1.3335V2.68622M7.99967 13.3141V14.6668M1.33301 8.00016H2.68573M13.3136 8.00016H14.6663M3.28563 3.28612L4.24215 4.24264M11.7572 11.7577L12.7137 12.7142M12.7117 3.28662L11.7552 4.24314M4.24011 11.7582L3.28359 12.7147M11.1369 8.00016C11.1369 9.73282 9.73233 11.1374 7.99967 11.1374C6.26702 11.1374 4.86242 9.73282 4.86242 8.00016C4.86242 6.2675 6.26702 4.86291 7.99967 4.86291C9.73233 4.86291 11.1369 6.2675 11.1369 8.00016Z"
            stroke="#F2F5FA"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          className={clsx(styles.moonDk)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M19.1024 13.6161C17.7043 14.0716 16.1369 14.0185 14.6991 13.3481C11.7072 11.9529 10.4025 8.40957 11.7651 5.41092C9.40094 5.61964 7.20947 7.04856 6.13431 9.35426C4.53014 12.7944 6.01849 16.8836 9.45864 18.4878C12.8988 20.0919 16.988 18.6036 18.5922 15.1634C18.8277 14.6584 18.9966 14.1393 19.1024 13.6161Z"
            stroke="#703906"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <section className={clsx(styles.header)}>
      <div className={clsx(styles.info)}>
        <h2 className={clsx(styles.heading)}>
          Free security tool to protect your personal data
        </h2>
        <p className={clsx(styles.paragraph)}>Download latest version :</p>
        <div className={clsx(styles.buttons)}>
          <a href="">
            <img
              className={clsx(styles.main, styles.light)}
              src={windowsicon}
              alt="windows-icon"
            />
            <img
              className={clsx(styles.main, styles.dark)}
              src={windowsDk}
              alt="windows-icon"
            />
            <div className={clsx(styles.buttontext)}>
              <p>Windows</p>
              <h4>Intelv0.1.4</h4>
            </div>
          </a>

          <a href="">
            <img
              className={clsx(styles.main, styles.light)}
              src={macicon}
              alt="mac-icon"
            />
            <img
              className={clsx(styles.main, styles.dark)}
              src={macDk}
              alt="mac-icon"
            />
            <div className={clsx(styles.buttontext)}>
              <p>Mac</p>
              <h4>versionNum</h4>
            </div>
          </a>

          <a href="">
            <img
              className={clsx(styles.main, styles.light)}
              src={chromeicon}
              alt="chrome-icon"
            />
            <img
              className={clsx(styles.main, styles.dark)}
              src={chromeDk}
              alt="chrome-icon"
            />
            <div className={clsx(styles.buttontext)}>
              <p>Chrome</p>
              <h4>versionNum</h4>
            </div>
          </a>

          <a href="">
            <img
              className={clsx(styles.main, styles.light)}
              src={iosicon}
              alt="ios-icon"
            />
            <img
              className={clsx(styles.main, styles.dark)}
              src={iosDk}
              alt="ios-icon"
            />
            <div className={clsx(styles.buttontext)}>
              <p>iOS</p>
              <h4>versionNum</h4>
            </div>
          </a>

          <a href="">
            <img
              className={clsx(styles.main, styles.light)}
              src={androidicon}
              alt="android-icon"
            />
            <img
              className={clsx(styles.main, styles.dark)}
              src={androidDk}
              alt="android-icon"
            />
            <div className={clsx(styles.buttontext)}>
              <p>Android</p>
              <h4>versionNum</h4>
            </div>
          </a>
        </div>
      </div>

      <div className={clsx(styles.img)}>
        <img src={headerbg} alt="header-bg" className={clsx(styles.bg)} />
        <img
          className={clsx(styles.main, styles.light)}
          src={header}
          alt="header"
        />
        <img
          className={clsx(styles.main, styles.dark)}
          src={headerDk}
          alt="header-dark"
        />
      </div>
    </section>
  );
}

function Encryption() {
  return (
    <section className={clsx(styles.encryption)}>
      <div className={clsx(styles.info)}>
        <h2 className={clsx(styles.heading)}>
          Powerful encryption mechanism to protect your data
        </h2>
        <p className={clsx(styles.paragraph)}>
          TapSafe's unique encryption mechanism is simple but highly secure:
          your phone is the one and only key to your vault. Accessing your
          passwords through another device, such as the browser extension or the
          desktop app, will always require approval from your phone first. This
          also means that, even in the case of a complete data breach of
          TapSafe’s s ervers, your passwords will remain encrypted and
          inaccessible to anyone other than you.
        </p>
      </div>
      <div className={clsx(styles.img)}>
        <img className={styles.bg} src={decryptionBg} alt="decryption-bg" />
        <img
          className={clsx(styles.main, styles.light)}
          src={decryption}
          alt="decryption"
        />
        <img
          className={clsx(styles.main, styles.dark)}
          src={decryptionDk}
          alt="decryption-dark"
        />
      </div>
    </section>
  );
}

type THowToTextDatum = {
  title: string;
  img: string;
  imgDk: string;
  bulletins: string[];
};
const howToTextData: THowToTextDatum[] = [
  {
    title: "Connect multiple devices",
    img: first,
    imgDk: firstDk,
    bulletins: [
      "Install the TapSafe mobile app",
      "Install the TapSage desktop app and browser extension",
      "Scan the QR code found in your desktop app or browser extension with your mobile app to connect",
    ],
  },
  {
    title: "Store your passwords",
    img: second,
    imgDk: secondDk,
    bulletins: [
      "You can save your passwords via the mobile app, desktop app, or browser extension",
      "Your data is always stored securely on the cloud",
    ],
  },
  {
    title: "Access your passwords",
    img: third,
    imgDk: thirdDk,
    bulletins: [
      "Open a password from the desktop app or browser extension",
      "Press ‘Allow’ from the mobile app, and you’re ready to go!",
    ],
  },
];

function HowTo() {
  return (
    <section className={clsx(styles.howto)}>
      <div className={styles.leftMargin} />
      <div className={styles.body}>
        <div className={clsx(styles.sectionImg)}>
          <div className={clsx(styles.innerWrapper)}>
            <img className={styles.bg} src={howtoBg} alt="howTo-bg" />
            <img
              src={howto}
              alt="howto"
              className={clsx(styles.main, styles.light)}
            />
            <img
              src={howtoDk}
              alt="howto"
              className={clsx(styles.main, styles.dark)}
            />
          </div>
        </div>
        <div className={clsx(styles.sectionInfo)}>
          {howToTextData.map((datum, index) => (
            <div className={clsx(styles.datum, styles[`datum_${index}`])}>
              <h2 className={clsx(styles.heading)}>{datum.title}</h2>
              <div className={clsx(styles.container)}>
                <div className={clsx(styles.icon)}>
                  <div className={styles.imgSupporter} />
                  <img
                    className={clsx(styles.light, styles[`img_${index}`])}
                    src={datum.img}
                    alt={`${datum.title}-image`}
                  />
                  <img
                    className={clsx(styles.dark, styles[`img_${index}`])}
                    src={datum.imgDk}
                    alt={`${datum.title}-darkImage`}
                  />
                </div>
                <ul className={clsx(styles.paragraph)}>
                  {datum.bulletins.map((bulletin) => (
                    <li className={clsx(styles.line)}>{bulletin}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Synchronization() {
  return (
    <section className={clsx(styles.synchronization)}>
      <div className={clsx(styles.info)}>
        <h2 className={clsx(styles.heading)}>
          Synchronized and encrypted <span>across multiple devices</span>
        </h2>
        <p className={clsx(styles.paragraph)}>
          Keep your data encrypted on the cloud and synchronized between an
          unlimited number of desktops and browsers. For security purposes, only
          one mobile app can be logged in at a time.
        </p>
      </div>
      <div className={clsx(styles.img)}>
        <img
          className={styles.bg}
          src={synchronizationBg}
          alt="synchronization-bg"
        />
        <img
          className={styles.main}
          src={synchronization}
          alt="synchronization"
        />
      </div>
    </section>
  );
}

function Download() {
  return (
    <section className={clsx(styles.download)}>
      <div className={clsx(styles.info)}>
        <h2 className={clsx(styles.heading)}>
          Download to discover our product
        </h2>
        <p className={clsx(styles.paragraph)}>
          Desktop version :
        </p>
        <div className={clsx(styles.buttons)}>
          <a href="">
            <div className={clsx(styles.download)}>
              <img src={lightapple} className={clsx(styles.icon, styles.light)} />
              <p>MacOS Intel v0.4.1</p>
              <img src={download} className={clsx(styles.dlicon)} />
            </div>
          </a>
          <a href="">
            <div className={clsx(styles.download)}>
              <img src={apple} className={clsx(styles.icon)} />
              <p>MacOS M1 v0.4.1</p>
              <img src={download} className={clsx(styles.dlicon)} />
            </div>
          </a>
          <a href="">
            <div className={clsx(styles.download)}>
              <img src={chrome} className={clsx(styles.icon)} />
              <p>Chrome</p>
              <img src={download} className={clsx(styles.dlicon)} />
            </div>
          </a>
        </div>
        <p className={clsx(styles.paragraph)}>
          Mobile version :
        </p>
        <div className={clsx(styles.buttons)}>
          <a href="">
            <div className={clsx(styles.download)}>
              <img src={appstore} className={clsx(styles.icon)} />
              <p>Apple Store v0.5.2</p>
              <img src={download} className={clsx(styles.dlicon)} />
            </div>
          </a>
          <a href="">
            <div className={clsx(styles.download)}>
              <img src={android} className={clsx(styles.icon)} />
              <p>Google Store</p>
              <img src={download} className={clsx(styles.dlicon)} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section className={clsx(styles.footer)}>
      <div className={clsx(styles.info)}>
        <img src={logo} className={clsx(styles.img)}/>
        <div className={clsx(styles.center)}>
          <p>Customer Service</p>
          <p>Privacy & Policy</p>
        </div>
        <p className={clsx(styles.copyright)}>Copyright</p>
        <p className={clsx(styles.footer)}>© 2023 Gan Jing Safe. All rights reserved.</p>
      </div>
    </section>
  )
}

// const Synchronization = () => (
//   <section className={`${layout.sectionReverse} mt-20`}>
// //   <div className={layout.sectionImgReverse}>
// //     <img src={synchronization} alt='synchronization' className='w-[383.8px] h-[334.2px]' />
// //   </div>

// //     <div className={`${layout.sectionInfo}`} >
// //       <h2 className={`${styles.heading2} dark:text-white `}>Synchronization management <br className='sm:block hidden' /> on multiple devices</h2>
// //       <p className={`${styles.paragraph} mt-5 dark:text-slate-400`}>A unique technology concept. Our product can synchronize your data across multiple devices while ensuring security.</p>
// //     </div>
// //   </section>
