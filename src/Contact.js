import React from "react";
import { Avatar } from "@material-ui/core";
import "./Contact.css";

function Contact({ src, username }) {
  return (
    <div>
      <div className="contact">
        {src && <Avatar src={src} />}
        <h4>{username}</h4>
      </div>
    </div>
  );
}

export default Contact;
