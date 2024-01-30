import React, { useEffect } from "react";

import "./App.css";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import Sidenav from "./componets/Sidenav";
import Aos from "aos";
const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <main className="main" id="main">
        <div style={{ width: "90%" }}>
          <Outlet />
        </div>
        <Sidenav  />
      </main>
    </>
  );
};

export default App;
