import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { Hyph } from "../Utils/Utils";
import TokenService from "../../services/token-service";
import "./Header.css";

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.location.reload();
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in mobile">
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
      <div className="Header__not-logged-in not_mobile">
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
          <Link to="/" className="Header_title">
            <FontAwesomeIcon className="green" icon={faDumbbell} /> Gymbnb
          </Link>
        </h1>
        <div className="Header_login">
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </nav>
    );
  }
}
