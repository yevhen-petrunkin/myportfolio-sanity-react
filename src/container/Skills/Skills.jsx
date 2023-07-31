import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <section id="skills" className="app__section">
      <h2 className="head-text">
        Skills & <span>Experiences</span>
      </h2>

      <div className="app__skills-container">
        <motion.ul className="app__skills-list">
          {skills.map((skill) => (
            <motion.li
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.li>
          ))}
        </motion.ul>

        <ul className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.li className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.ul className="app__skills-exp-works">
                {experience?.works?.map((work) => (
                  <li key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h3 className="bold-text">{work.name}</h3>
                      <p className="p-text">{work.company}</p>
                    </motion.div>

                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </li>
                ))}
              </motion.ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MotionWrap(Skills);
