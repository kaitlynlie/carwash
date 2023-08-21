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
  headerbg,
  apple,
  download,
  chrome,
  appstore,
  android,
  lightapple,
  lightdownload,
  lightandroid,
  lightappstore,
  lightchrome,
  windows,
  lightwindows
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
}
