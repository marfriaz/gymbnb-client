import React, { Component } from "react";
import { Link } from "react-router-dom";
import GymPagePhotos from "../../components/GymPagePhotos/GymPagePhotos";
import "./GymGridItem.css";

export default class GymGridItem extends Component {
  render() {
    const { gym } = this.props;
    return (
      <div className="GymGridItem">
        <div className="GymGridItem_PhotoSlideshow">
          <GymPagePhotos gym={gym} />
        </div>
        <div className="GymGridItem_content">
          <Link to={`/gyms/${gym.id}`}>
            <div className="GymGridItem_title">{gym.title}</div>
            <div className="GymGridItem_location">{gym.location}</div>
          </Link>
        </div>
      </div>
    );
  }
}
