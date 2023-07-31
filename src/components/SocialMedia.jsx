import React from "react";

import { FaTelegram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const SocialMedia = () => (
  <ul className="app__social">
    <li>
      <FaLinkedin />
    </li>
    <li>
      <FaGithub />
    </li>
    <li>
      <FaTelegram />
    </li>
    <li>
      <FaFacebook />
    </li>
  </ul>
);

export default SocialMedia;
