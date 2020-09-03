import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import GymGrid from "../../components/GymGrid/GymGrid";
import SearchBar from "../../components/SearchBar/SearchBar";

export default class GymSearchPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  handleSubmit = (e) => {
    console.log("submitted");

    const { history } = this.props;
    if (e == "all") {
      history.push("/gyms");
    } else {
      history.push(``);
      history.push(`gyms/location/${e}`);
    }
  };

  renderGyms() {
    const { gymList = [], error } = this.props;
    return <GymGrid gymList={gymList} error={error} />;
  }

  render() {
    const { error } = this.props;
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
        {/* <GymGrid /> */}
      </>
    );
  }
}
