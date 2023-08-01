import React, { useEffect } from "react";
import "./Project.scss";

import { createPortal } from "react-dom";

import { urlFor } from "../../client";
import getProjectIcons from "../../services/getProjectIcons";

import { HiX } from "react-icons/hi";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const Project = ({ project, onClose }) => {
  const {
    title,
    description,
    explanation,
    projectLink,
    codeLink,
    imageUrls,
    tags,
  } = project;

  const techs = getProjectIcons(tags);
  const techString = tags.join(", ");

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeydown);
  }, [onClose]);

  return createPortal(
    <section className="project">
      <div className="project__close" onClick={onClose}>
        <HiX />
      </div>

      <h2 className="project__title">{title}</h2>
      <h3 className="project__undertitle">{description}</h3>

      <ul className="project__icons">
        {techs.map((tech) => {
          const Icon = tech.image;
          return (
            <li key={tech.id}>
              <Icon size={30} />
            </li>
          );
        })}
      </ul>

      <div className="project__box">
        <ul className="project__images">
          {imageUrls.map((url, index) => (
            <li key={url + index}>
              <img src={urlFor(url)} alt="Project IMG" />
            </li>
          ))}
        </ul>

        <div className="project__data">
          <p className="project__description">
            <span>Description: </span>
            {explanation}
          </p>

          <p className="project__techs">
            <span>Technologies: </span>
            {techString}
          </p>
        </div>
      </div>

      <div className="project__btn-set">
        <a
          href={projectLink || "#"}
          className="app__flex"
          target="_blank"
          rel="noreferrer noopener"
          style={
            !projectLink
              ? {
                  backgroundColor: "#5d606f",
                  cursor: "not-allowed",
                }
              : {}
          }
        >
          <AiFillEye size={24} />
          See Deployed Project
        </a>

        <a
          href={codeLink || "#"}
          className="app__flex"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiFillGithub size={24} />
          See Project Code
        </a>
      </div>
    </section>,
    projectModal
  );
};

export default Project;
