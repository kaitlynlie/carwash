import clsx from "clsx";
import { Home } from "./pages/home";

const App = () => (
  <div className={clsx("app", "w-full overflow-hidden")}>
    <Home />
  </div>
);

export default App;
