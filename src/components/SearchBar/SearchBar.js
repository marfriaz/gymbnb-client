import React, { Component } from "react";
import SearchBox from "../SearchBox/SearchBox";
// import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__heading">
          <h1>Book a local home gym</h1>
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
