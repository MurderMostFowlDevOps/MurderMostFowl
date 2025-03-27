import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Gameplay from "./components/gameplay";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Dashboard />
        {/* <Gameplay /> */}
      </div>
    </>
  );
}

export default App;
