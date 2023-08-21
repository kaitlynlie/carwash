import styles from "./home.module.scss";
import stylesTw, { layout } from "../style";
import clsx from "clsx";

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
