import React from "react";

import "./App.scss";

import { Header, About, Work, Skills, Certificates, Footer } from "./container";
import { AppWrap } from "./wrapper";
import { Hero } from "./components";

const App = () => {
  return (
    <div className="app">
      <Header />
      <AppWrap>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Certificates />
        <Footer />
      </AppWrap>
    </div>
  );
};

export default App;
