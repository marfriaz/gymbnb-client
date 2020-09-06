// from ArticleListItem

import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./ArticleListItem.css";

export default class GymGridItem extends Component {
  render() {
    const { gym } = this.props;
    return (
      <Link to={`/gyms/${gym.id}`} className="GymListItem">
        <GymPhotos gym={gym} />
        <h2>{gym.location}</h2>
      </Link>
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
