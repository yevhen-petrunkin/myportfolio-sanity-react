import React, { useState, useEffect } from "react";

// import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

import { images } from "../../constants";

import Card from "../../components/Card/Card";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client
      .fetch(query)
      .then((data) => {
        setAbouts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="app__about">
      <h2 className="head-text">
        Delivering <span>Best Solutions</span> <br />
        Tailored For <span>Client's Needs</span>
      </h2>

      <ul className="app__profiles">
        {abouts.map((about, index) => (
          <Card
            key={about.title + index}
            title={about.title}
            description={about.description}
            imgUrl={urlFor(about.imgUrl)}
          />
        ))}
      </ul>
    </section>
  );
};

export default About;
