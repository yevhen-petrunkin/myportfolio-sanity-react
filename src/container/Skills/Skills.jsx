import React, { useState, useEffect } from "react";
import "./Skills.scss";

import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { urlFor, client } from "../../client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import sortArrByDate from "../../services/sortArrByDate";

import { IoSchool } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";

import { MotionWrap } from "../../wrapper";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(sortArrByDate(data, true));
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(sortArrByDate(data, true));
    });
  }, []);

  return (
    <section id="skills" className="app__section">
      <h2 className="head-text">
        Training, Experience & <span>Skills</span>
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

        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.year}
              date={experience.year}
              className={
                experience.iswork
                  ? "vertical-timeline-element--work"
                  : "vertical-timeline-element--education"
              }
              icon={experience.iswork ? <MdOutlineWork /> : <IoSchool />}
              iconStyle={
                experience.iswork
                  ? { background: "#5d606f", color: "#f5f9ff" }
                  : { background: "#528ff8", color: "#f5f9ff" }
              }
            >
              <motion.ul className="app__skills-exp-works">
                {experience?.works?.map((work) => (
                  <li key={work.desc}>
                    <div
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.desc}
                    >
                      <h3 className="bold-text">{work.name}</h3>
                      <p className="p-text">{work.company}</p>

                      <ReactTooltip
                        id={work.desc}
                        effect="solid"
                        arrowColor="#fff"
                        className="tooltip"
                      >
                        {work.desc}
                      </ReactTooltip>
                    </div>
                  </li>
                ))}
              </motion.ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default MotionWrap(Skills);
