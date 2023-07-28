import React from "react";
import "./Card.scss";

const Card = ({
  title = "Direction",
  description = "Description",
  imgUrl = "",
}) => {
  return (
    <li className="app__profile-item">
      <div className="app__profile-img">
        <img src={imgUrl} alt={title} />
      </div>
      <h3 className="app__profile-title">{title}</h3>
      <p className="app__profile-info">{description}</p>
    </li>
  );
};

export default Card;
