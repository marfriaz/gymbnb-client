import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./ArticleListItem.css";

export default class GymListItem extends Component {
  render() {
    const { gym } = this.props;
    return (
      <Link to={`/gyms/${gym.id}`} className="GymListItem">
        <header className="GymListItem__header">
          <h2 className="GymListItem__title">{gym.title}</h2>
          <h2 className="GymListItem__location">{gym.location}</h2>
        </header>
        <GymPhotos gym={gym} />
      </Link>
    );
  }
}

// MINI GRID OF PHOTOS?????
function GymPhotos({ gym }) {
  return (
    <img
      className="GymGridItem__photo"
      src={gym.img_url_one}
      alt="Home Gym Listing Photo"
    />
  );
}
