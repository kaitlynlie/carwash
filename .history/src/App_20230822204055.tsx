import clsx from "clsx";
import { Home } from "./pages/home";
import { Navbar } from "./components";
import { Route, Routes } from 'react-router-dom'
import React from "react";
import { tracks } from "./assets";

function App() {
  return (
    <>
      <div className={clsx("app", "w-full overflow-hidden")}>
        <Navbar />
        <img
            src={tracks}
            alt='tracks'
            className={clsx(styles.tracks)}
          />
        <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
      </div>
    </>
  )
  }

export default App;