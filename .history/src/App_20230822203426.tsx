import clsx from "clsx";
import { Home } from "./pages/home";
import { Navbar } from "./components";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className={clsx("app", "w-full overflow-hidden")}>
        <Home />
        <Navbar />
      </div>
    </>
  )
  }

export default App;
