import React, { Component } from "react";
import SearchBox from "../SearchBox/SearchBox";

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__heading_div">
          <div className="SearchBar__heading">Book a local home gym</div>
        </div>
        <div className="SearchBar__controls">
          <SearchBox
            handleSearchSubmit={(event) => this.props.handleSearchSubmit(event)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
