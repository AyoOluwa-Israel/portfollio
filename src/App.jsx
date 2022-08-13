import { useState } from "react";
import Client from "./components/clients";
import CardContainer from "./components/clients/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";

function App() {

  return (
    <div className="bg-black font-primary scroll-smooth">
      <div className="">
        <Header />
        <Hero />
        <Client />
        <CardContainer />
        <Services/>
        <Stats/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
