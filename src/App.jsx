/* eslint-disable no-unused-vars */

import "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Demo from "./components/Demo/Demo";
import HomeHeader from "./components/Home/HomeHeader";
import DemoHeader from "./components/Demo/DemoHeader";

function App() {
  const auth = false;
  return (
    
    <>
    {auth ? <HomeHeader/>: <DemoHeader/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Demo" element={<Demo />} />
      </Routes>
    </>
  );
}

export default App;
