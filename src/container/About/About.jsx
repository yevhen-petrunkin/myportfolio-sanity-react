import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
// import { urlFor, client } from "../../client";

const abouts = [
  {
    title: "Frontend Development",
    description: "I am a good frontend developer.",
    imgUrl: "",
  },
  {
    title: "Responsive and Adaptive Websites",
    description: "I am a good website master.",
    imgUrl: "",
  },
  {
    title: "React and NextJS solutions",
    description: "Building fullstack solutions with cutting-edge technologies",
    imgUrl: "",
  },
  {
    title: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, fuga.",
    imgUrl: "",
  },
];

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);

  return (
    <section>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
