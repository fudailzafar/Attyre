import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Color from "./pages/Color";
import Curations from "./pages/Curations";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/color" element={<Color />} />
          <Route path="/curations" element={<Curations />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
