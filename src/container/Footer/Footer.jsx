import React, { useState } from "react";

import { images } from "../../constants";
import { MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section id="contact" className="app__section">
      <h2 className="head-text">
        Contact Me <span>Right Away</span>
      </h2>

      <ul className="app__footer-cards app__flex">
        <li className="app__footer-card">
          <a href="mailto:novamovaxxi@gmail.com" className="p-text app__flex">
            <img src={images.email} alt="email" />
            novamovaxxi@gmail.com
          </a>
        </li>

        <li className="app__footer-card">
          <a href="tel:+380962978729" className="p-text app__flex">
            <img src={images.mobile} alt="phone" />
            +38 (096) 29 787 29
          </a>
        </li>
      </ul>

      {!isFormSubmitted ? (
        <form className="app__footer-form" onSubmit={handleSubmit}>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
              required
            />

            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>

          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleChangeInput}
            rows="15"
            required
          />

          <button type="submit" className="p-text">
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div className="footer__head-box">
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </section>
  );
};

export default MotionWrap(Footer);
