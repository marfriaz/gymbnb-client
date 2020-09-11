import React, { Component } from "react";
import GymListContext from "../../contexts/GymListContext";
import GymApiService from "../../services/gym-api-service";
import { Section } from "../../components/Utils/Utils";
import GymGrid from "../../components/GymGrid/GymGrid";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./GymSearchPage.css";

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
    if (e == "all" || undefined) {
      history.push(``);
      history.push("/gyms");
    } else {
      history.push(``);
      history.push(`gyms/location/${e}`);
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
        <Section list className="GymSearchPage">
          <div className="GymSearchPage_SearchBar">
            <SearchBar
              handleSearchSubmit={(event) => this.handleSubmit(event)}
            />
          </div>
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
