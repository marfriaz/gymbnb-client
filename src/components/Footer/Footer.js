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
        <ul class="social">
          <li class="social_icon">
            <FontAwesomeIcon className="green" icon={faFacebook} />
            {/* <i class="fab fa-twitter"></i> */}
          </li>
          <li class="social_icon">
            <FontAwesomeIcon className="green" icon={faTwitter} />
          </li>
          <li class="social_icon">
            <FontAwesomeIcon className="green" icon={faLinkedin} />
          </li>
        </ul>
      </>
    );
  }
}
