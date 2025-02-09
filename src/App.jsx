import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Footer from "./components/Footer";
import Capabilities from "./components/Capabilities";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Capabilities />
      <Grid />
      <Footer />
    </div>
  );
};

export default App;
