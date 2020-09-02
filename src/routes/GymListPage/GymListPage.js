import React, { Component } from "react";
import GymListItem from "../../components/GymListItem/GymListItem";
import SearchBar from "../../components/SearchBar/SearchBar";
import GymListContext from "../../contexts/GymListContext";
import GymApiService from "../../services/gym-api-service";
import { Section } from "../../components/Utils/Utils";

export default class GymListPage extends Component {
  handleSubmit = (e) => {
    console.log("submitted");
  };

  renderGyms() {
    const { gymList = [] } = this.props;
    return gymList.map((gym) => <GymListItem key={gym.id} gym={gym} />);
  }

  render() {
    const { error } = this.props;
    return (
      <>
        <SearchBar handleSearchSubmit={(event) => this.handleSubmit(event)} />
        <Section list className="GymListPage">
          {error ? (
            <p className="red">There was an error, try again</p>
          ) : (
            this.renderGyms()
          )}
        </Section>
      </>
    );
  }
}
