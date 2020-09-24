import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class GymGridButton extends Component {
  renderButtons() {
    const { gymList } = this.props;
    if (!gymList || gymList.length < 6) {
      return null;
    } else {
      return (
        <Link to={`/gyms`} className="GymGridExploreButton">
          <button type="Submit" className="button">
            Explore {gymList.length - 6} more
          </button>
        </Link>
      );
    }
  }
  render() {
    return <>{this.renderButtons()}</>;
  }
}
