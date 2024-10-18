import React from "react";
import Contact from "./components/Contact";
import Summary from "./components/Summary";
import Hero from "./components/Hero";

function HomePage() {
  return (
    <div>
      <Hero></Hero>
      <Contact></Contact>
      <Summary></Summary>
    </div>
  );
}

export default HomePage;
