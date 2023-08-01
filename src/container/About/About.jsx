import React, { useState, useEffect } from "react";
import "./About.scss";

import { MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

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
    <section id="about" className="app__section">
      <h2 className="head-text">
        My Brief <span>Profile</span>
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

export default MotionWrap(About);
