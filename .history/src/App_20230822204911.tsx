import clsx from "clsx";
import { Home } from "./pages/home";
import About from './pages/About'
import { Navbar } from "./components";
import { Route, Routes } from 'react-router-dom'
import React from "react";
import { tracks } from "./assets";
import styles from "../src/pages/home.module.scss";

function App() {
  return (
    <>
      <div className={clsx("app", "w-full overflow-hidden")}>
          {/* <img
            src={tracks}
            alt='tracks'
            className={clsx(styles.tracks)}
          /> */}
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
      </Routes>
      </div>
    </>
  )
  }

export default App;
