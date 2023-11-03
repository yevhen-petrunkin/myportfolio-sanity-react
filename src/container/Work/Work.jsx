import React, { useState, useEffect } from "react";
import "./Work.scss";

import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

import { filterItems } from "../../constants";
import sortArrByDate from "../../services/sortArrByDate";

import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { MotionWrap } from "../../wrapper";
import { Project } from "../../components";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [toggle, setToggle] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(sortArrByDate(data, true));
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const handleClose = () => setToggle(false);

  return (
    <section id="projects" className="app__section alternate-bg">
      <h2 className="head-text">
        My Creative <span>Portfolio</span>
      </h2>

      <ul className="app__work-filter">
        {filterItems.map((item) => (
          <li
            key={item}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <article
            className="app__work-item"
            key={index}
            onClick={() => {
              setCurrentProject(work);
              setTimeout(() => setToggle(true), 300);
            }}
          >
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imageUrls[0])} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a
                  href={work.projectLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a
                  href={work.codeLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h3 className="app__work-title">{work.title}</h3>
              <p className="app__work-info" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </article>
        ))}
      </motion.div>

      {toggle && <Project project={currentProject} onClose={handleClose} />}
    </section>
  );
};

export default MotionWrap(Work);
