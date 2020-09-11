import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GymGridItem.css";

export default class GymGridItem extends Component {
  render() {
    const { gym } = this.props;
    return (
      <div className="GymGridItem_div">
        <Link to={`/gyms/${gym.id}`} className="GymGridItem">
          <GymPhotos gym={gym} />
          <div className="GymGridItem_location">{gym.location}</div>
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
