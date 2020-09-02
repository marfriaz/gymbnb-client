import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import GymGrid from "../../components/GymGrid/GymGrid";
import SearchBar from "../../components/SearchBar/SearchBar";

export default class GymSearchPage extends Component {
  handleSubmit = (e) => {
    console.log("submitted!");
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
