import React from "react";
import "./Sponsor.css";

function Sponsor({ image, title, urlLink }) {
  return (
    <div className="sponsor">
      <img src={image} alt="" />
      <div className="sponsor__desc">
        <h4>{title}</h4>
        <p>{urlLink}</p>
      </div>
    </div>
  );
}

export default Sponsor;
