import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GymGridItem.css";

export default class GymGridItem extends Component {
  render() {
    const { gym } = this.props;
    return (
      <div className="GymListItem_div">
        <Link to={`/gyms/${gym.id}`} className="GymListItem">
          <GymPhotos gym={gym} />
          <h2>{gym.location}</h2>
        </Link>
      </div>
    );
  }
}

function GymPhotos({ gym }) {
  return (
    <img
      className="GymGridItem__photo"
      src={gym.img_url_one}
      alt="Home Gym Listing Photo"
    />
  );
}
