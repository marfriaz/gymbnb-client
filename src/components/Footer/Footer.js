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
            <FontAwesomeIcon className="green" icon={faFacebook} />
          </li>
          <li className="social_icon">
            <FontAwesomeIcon className="green" icon={faTwitter} />
          </li>
          <li className="social_icon">
            <FontAwesomeIcon className="green" icon={faLinkedin} />
          </li>
        </ul>
      </>
    );
  }
}
