import React, { Component } from "react";
import GymListItem from "../../components/GymListItem/GymListItem";
import SearchBox from "../../components/SearchBox/SearchBox";
import GymListContext from "../../contexts/GymListContext";
import GymApiService from "../../services/gym-api-service";
import { Section } from "../../components/Utils/Utils";
import "./GymListPage.css";

export default class GymListPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
    match: { params: {} },
  };

  static contextType = GymListContext;

  componentDidMount() {
    this.context.clearError();
    const { gymLocation } = this.props.match.params;

    if (gymLocation == undefined) {
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
    if (e == "all" || undefined) {
      history.push(``);
      history.push("/gyms");
      window.location.reload();
    } else {
      history.push(``);
      history.push(`gyms/location/${e}`);
      window.location.reload();
    }
  };

  renderGyms() {
    const { gymList = [] } = this.context;
    return gymList.map((gym) => (
      <li>
        <GymListItem key={gym.id} gym={gym} />
      </li>
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <>
        <Section list className="GymListPage">
          <SearchBox handleSearchSubmit={(event) => this.handleSubmit(event)} />
          <ul className="GymList_ul">
            {error ? (
              <p className="red">There was an error, try again </p>
            ) : (
              this.renderGyms()
            )}
          </ul>
        </Section>
      </>
    );
  }
}
