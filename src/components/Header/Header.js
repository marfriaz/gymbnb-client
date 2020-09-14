import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import TokenService from "../../services/token-service";
import "./Header.css";

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.location.reload();
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in ">
        <Link to="/hostgym">Host a Gym &nbsp;</Link>
        <Link onClick={this.handleLogoutClick} to="/">
          Log Out &nbsp;
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/hostgym">Host a Gym &nbsp; </Link>
        <Link to="/signup">Sign Up &nbsp;</Link>
        <Link to="/login">Log in &nbsp;</Link>
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
