import React, { Component } from "react";
import GymListContext from "../../contexts/GymListContext";
// import "./SearchBox.css";

class SearchBox extends Component {
  static defaultProps = {
    onSubmit: () => {},
    history: {
      push: () => {},
    },
  };

  static contextType = GymListContext;

  handleSubmit = (e) => {
    // e.preventDefault();
    this.props.handleSearchSubmit(e);
    this.updateSearchOption(e);
  };

  updateSearchOption = (gymLocation) => {
    this.context.setLocation(gymLocation);
  };

  render() {
    return (
      <form
        className="SearchBox"
        onSubmit={(e) => {
          e.preventDefault();
          this.handleSubmit(e.target.searchBox.value);
        }}
      >
        <label htmlFor="searchBox">Search:</label>
        <select type="text" name="searchBox" id="searchBox">
          <option value="all">All Cities</option>
          <option value="san-francisco">San Francisco</option>
          <option value="los-angeles">Los Angeles</option>
          <option value="san-diego">San Diego</option>
          <option value="new-york">New York</option>
        </select>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBox;
