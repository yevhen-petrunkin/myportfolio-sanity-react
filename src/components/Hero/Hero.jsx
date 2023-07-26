import React from "react";
import "./Hero.scss";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="hero">
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
            wrapper="span"
            speed={10}
            style={{
              color: "#FF0000",
              display: "inline-block",
            }}
            repeat={Infinity}
            omitDeletionAnimation
          />{" "}
        </h2>
        Developer
      </div>
    </div>
  );
};

export default Hero;