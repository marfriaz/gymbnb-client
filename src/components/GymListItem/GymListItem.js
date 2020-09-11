import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GymListItem.css";

export default class GymListItem extends Component {
  render() {
    const { gym } = this.props;
    return (
      <div className="GymListItem">
        <GymPhotos gym={gym} />
        <div className="GymListItem__content">
          <header className="GymListItem__header">
            <h2 className="GymListItem__title">{gym.title}</h2>
            <div className="GymListItem__location">{gym.location}</div>
          </header>
          <div>${gym.price} per hour</div>
          <p>{gym.description}</p>
          <Link to={`/gyms/${gym.id}`} className="GymListItem_link">
            <button type="Submit" className="button">
              See more details
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

// MINI GRID OF PHOTOS?????
function GymPhotos({ gym }) {
  return (
    <div className="GymListItem__photo_container">
      <img
        className="GymListItem__photo"
        src={gym.img_url_one}
        alt="Home Gym Listing Photo"
      />
    </div>
  );
}
