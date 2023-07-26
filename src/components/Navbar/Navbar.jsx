import React, { useState } from "react";
import "./Navbar.scss";

import { motion } from "framer-motion";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { images, navItems } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        {navItems.map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-btn">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
      </div>

      {/* Mobile Menu */}

      {toggle && (
        <div className={"app__navbar-modal"}>
          <div className="app__navbar-close">
            <HiX onClick={() => setToggle(false)} />
          </div>
          <ul>
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
