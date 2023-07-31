import React from "react";
import "./Hero.scss";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__heading">
        <h1 className="hero__title">I'm Yevhen Petrunkin</h1>
        <h2 className="hero__undertitle">
          <TypeAnimation
            sequence={[
              "Frontend",
              2000,
              "Web",
              2000,
              "React",
              2000,
              "Next.js",
              2000,
              "JavaScript",
              2000,
              "TypeScript",
              2000,
            ]}
            wrapper="div"
            speed={10}
            repeat={Infinity}
            omitDeletionAnimation
          />
        </h2>
        Developer
      </div>
    </section>
  );
};

export default Hero;
