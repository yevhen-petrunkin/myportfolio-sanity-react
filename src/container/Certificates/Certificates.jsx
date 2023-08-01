import React, { useState, useEffect } from "react";
import "./Certificates.scss";

import { urlFor, client } from "../../client";
import ReactTooltip from "react-tooltip";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { MotionWrap } from "../../wrapper";

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [certificates, setCertificates] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "certificates"]';

    client.fetch(query).then((data) => {
      setCertificates(data);
    });
  }, []);

  return (
    <section className="app__section alternate-bg">
      {certificates.length && (
        <>
          <h2 className="head-text">
            Documents & <span>Certificates</span>
          </h2>

          <div
            className="app__certificate-item"
            data-tip
            data-for={certificates[currentIndex].name}
          >
            <img
              src={urlFor(certificates[currentIndex].imageurl)}
              alt={certificates[currentIndex].name}
            />

            <div className="app__certificate-content">
              <h3 className="bold-text">{certificates[currentIndex].name}</h3>
              <a
                href={certificates[currentIndex].certLink}
                className="p-text"
                target="_blank"
                rel="noreferrer noopener"
              >
                Link
              </a>
            </div>

            <div className="app__certificate-btns app__flex">
              <div
                className="app__flex"
                onClick={() =>
                  handleClick(
                    currentIndex === 0
                      ? certificates.length - 1
                      : currentIndex - 1
                  )
                }
              >
                <HiChevronLeft />
              </div>

              <div
                className="app__flex"
                onClick={() =>
                  handleClick(
                    currentIndex === certificates.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
              >
                <HiChevronRight />
              </div>
            </div>

            <ReactTooltip
              id={certificates[currentIndex].name}
              effect="solid"
              arrowColor="#f5f9ff"
              className="tooltip"
            >
              {certificates[currentIndex].desc}
            </ReactTooltip>
          </div>
        </>
      )}
    </section>
  );
};

export default MotionWrap(Certificates);
