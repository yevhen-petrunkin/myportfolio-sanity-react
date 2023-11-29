import React from "react";

import { FaTelegram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const SocialMedia = () => (
  <ul className="app__social">
    <li>
      <a
        href="https://www.linkedin.com/in/yevhen-petrunkin"
        className="sidebar__link"
        target="_blank"
        rel="noreferrer noopener nofollow"
        title="Contact me on LinkedIn"
      >
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a
        href="https://github.com/yevhen-petrunkin"
        className="sidebar__link"
        target="_blank"
        rel="noreferrer noopener nofollow"
        title="See my GitHub"
      >
        <FaGithub />
      </a>
    </li>
    <li>
      <a
        href="https://t.me/yevhen_petrunkin"
        className="sidebar__link"
        target="_blank"
        rel="noreferrer noopener nofollow"
        title="Contact me on Telegram"
      >
        <FaTelegram />
      </a>
    </li>
    <li>
      <a
        href="https://www.facebook.com/profile.php?id=100011788286630"
        className="sidebar__link"
        target="_blank"
        rel="noreferrer noopener nofollow"
        title="Contact me on Facebook"
      >
        <FaFacebook />
      </a>
    </li>
  </ul>
);

export default SocialMedia;
