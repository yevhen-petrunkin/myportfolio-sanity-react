import React from "react";
import "./Header.scss";

import { Navbar, Hero } from "../../components";

const Header = () => {
  return (
    <header>
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
// export default AppWrap(Header, "home");
