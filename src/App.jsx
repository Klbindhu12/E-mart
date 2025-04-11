import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MobilePage from "./pages/MobilePage";
import ComputerPage from "./pages/ComputerPage";
import WatchePage from "./pages/WatchePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="/computer" element={<ComputerPage />} />
        <Route path="/watch" element={<WatchePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
