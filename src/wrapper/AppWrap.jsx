import React from "react";

import { SocialMedia } from "../components";

const AppWrap = ({ children }) => {
  return (
    <div className="app__container">
      {children}
      <SocialMedia />
    </div>
  );
};

export default AppWrap;
