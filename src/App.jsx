import React from "react";

import "./App.scss";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Hero } from "./components";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Work /> */}
        {/* <Skills /> */}
        {/* <Testimonial /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
