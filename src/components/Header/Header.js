import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hyph } from "../Utils/Utils";
import TokenService from "../../services/token-service";
import "./Header.css";

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link to="/hostgym">Host a Gym</Link>
        <Hyph />
        <Link onClick={this.handleLogoutClick} to="/">
          Log Out
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/hostgym">Host a Gym</Link>
        <Hyph />
        <Link to="/signup">Sign Up</Link>
        <Hyph />
        <Link to="/login">Log in</Link>
      </div>
    );
  }

  render() {
    return (
      <nav className="Header">
        <h1>
          <Link to="/">
            <FontAwesomeIcon className="green" icon="dumbbell" />
            Gymbnb
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}
