import React, { useState } from "react";
import "./Navbar.scss";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { navItems } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        {navItems.map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}

      <div className="app__navbar-mobile">
        <span className="app__navbar-btn">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
        </span>
        <span>My Portfolio</span>
      </div>

      {/* Mobile Modal */}

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
