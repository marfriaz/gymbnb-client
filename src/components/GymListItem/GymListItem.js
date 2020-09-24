import React, { Component } from "react";
import { Link } from "react-router-dom";
import PhotoSlideshow from "../../components/PhotoSlideshow/PhotoSlideshow";
import "./GymListItem.css";

export default class GymListItem extends Component {
  render() {
    const { gym, key } = this.props;
    return (
      <div className="GymListItem">
        <div className="GymListItem_PhotoSlideshow">
          <PhotoSlideshow gym={gym} key={key} />
        </div>
        <div className="GymListItem__content">
          <header className="GymListItem__header">
            <h2 className="GymListItem__title">{gym.title}</h2>
            <div className="GymListItem_price_and_location">
              <div className="GymListItem__location">{gym.location}</div>
              <div>
                <span className="GymListItem__price">${gym.price}</span> per
                hour
              </div>
            </div>
          </header>

          <p>{gym.description}</p>
          <Link to={`/gyms/${gym.id}`} className="GymListItem_link">
            <button type="Submit" className="GymListItem_link_button button">
              See more details
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
