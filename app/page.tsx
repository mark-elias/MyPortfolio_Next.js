import React from "react";
import Contact from "@/src/components/Contact";
import Hero from "@/src/components/Hero";
import Summary from "@/src/components/Summary";

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
