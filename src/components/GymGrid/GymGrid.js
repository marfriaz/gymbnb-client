// Corresponds to ArticleListPage

import React, { Component } from "react";
import { Link } from "react-router-dom";
import GymListContext from "../../contexts/GymListContext";
import GymApiService from "../../services/gym-api-service";
import { Section } from "../../components/Utils/Utils";
import GymGridItem from "../../components/GymGridItem/GymGridItem";

export default class GymGrid extends Component {
  static contextType = GymListContext;

  renderGyms() {
    const { gymList = [] } = this.context;
    // const gymListCount = gymList.count();
    return gymList.map((gym) => <GymGridItem key={gym.id} gym={gym} />);
  }

  render() {
    const { error } = this.context;
    return (
      <>
        <h2>Available Gyms around the World</h2>
        <Section list className="GymGridPage">
          {error ? (
            <p className="red">There was an error, try again</p>
          ) : (
            this.renderGyms()
          )}
        </Section>
        <Link to={`/gyms`} className="GymGridExploreButton">
          <button type="Submit">Explore {26} more</button>
        </Link>
      </>
    );
  }
}
