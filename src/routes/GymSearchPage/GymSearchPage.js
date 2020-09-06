// GymGrid = ArticleListPage

import React, { Component } from "react";
import GymListContext from "../../contexts/GymListContext";
import GymApiService from "../../services/gym-api-service";
import { Section } from "../../components/Utils/Utils";
import GymGrid from "../../components/GymGrid/GymGrid";
import SearchBar from "../../components/SearchBar/SearchBar";

export default class GymSearchPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  static contextType = GymListContext;

  componentDidMount() {
    this.context.clearError();
    GymApiService.getGyms()
      .then(this.context.setGymList)
      .catch(this.context.setError);
  }

  handleSubmit = (e) => {
    const { history } = this.props;
    const gymLocation = this.context.location;
    if (gymLocation == "all") {
      history.push("/gyms");
    } else {
      history.push(`gyms/location/${gymLocation}`);
    }
  };

  renderGyms() {
    const { gymList = [] } = this.context;
    return <GymGrid gymList={gymList} />;
  }

  render() {
    const { error } = this.context;
    return (
      <>
        <SearchBar handleSearchSubmit={(event) => this.handleSubmit(event)} />
        <Section list className="GymGridPage">
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
