import React, { Component } from "react";
import { Link } from "react-router-dom";
import PhotoSlideshow from "../../components/PhotoSlideshow/PhotoSlideshow";
import "./GymGridItem.css";

export default class GymGridItem extends Component {
  render() {
    const { gym } = this.props;
    return (
      <div className="GymGridItem">
        <div className="GymGridItem_PhotoSlideshow">
          <PhotoSlideshow gym={gym} />
        </div>
        <div>
          <Link to={`/gyms/${gym.id}`} className="GymGridItem_content">
            <div className="GymGridItem_title">{gym.title}</div>
            <div className="GymGridItem_location">{gym.location}</div>
          </Link>
        </div>
      </div>
    );
  }
}

// function GymPhotos({ gym }) {
//   return (
//     <img
//       className="GymGridItem__photo"
//       src={gym.img_url_one}
//       alt="Home Gym Listing Photo"
//     />
//   );
// }
