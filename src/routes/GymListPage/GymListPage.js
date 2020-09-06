import React, { Component } from "react";
import GymListItem from "../../components/GymListItem/GymListItem";
import SearchBar from "../../components/SearchBar/SearchBar";
import GymListContext from "../../contexts/GymListContext";
import GymApiService from "../../services/gym-api-service";
import { Section } from "../../components/Utils/Utils";

export default class GymListPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  static contextType = GymListContext;

  componentDidMount() {
    const gymLocation = this.context.location;
    this.context.clearError();
    if (gymLocation == "all" || "") {
      GymApiService.getGyms()
        .then(this.context.setGymList)
        .catch(this.context.setError);
    } else {
      GymApiService.getGymsByLocation(gymLocation)
        .then(this.context.setGymList)
        .catch(this.context.setError);
    }
  }

  handleSubmit = (e) => {
    const { history } = this.props;
    const gymLocation = this.context.location;
    if (gymLocation == "all") {
      history.push("/gyms");
    } else {
      history.push(``);
      history.push(`gyms/location/${gymLocation}`);
    }
  };

  renderGyms() {
    const { gymList = [] } = this.context;
    return gymList.map((gym) => <GymListItem key={gym.id} gym={gym} />);
  }

  render() {
    const { error } = this.context;
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
