import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <ul className="social">
          <li className="social_icon">
            <FontAwesomeIcon className="Facebook_icon" icon={faFacebook} />
          </li>
          <li className="social_icon">
            <FontAwesomeIcon className="Twitter_icon" icon={faTwitter} />
          </li>
          <li className="social_icon">
            <FontAwesomeIcon className="Linkedin_icon" icon={faLinkedin} />
          </li>
        </ul>
      </>
    );
  }
}
