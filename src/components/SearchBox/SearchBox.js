import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import GymListContext from "../../contexts/GymListContext";
import "./SearchBox.css";

class SearchBox extends Component {
  static defaultProps = {
    onSubmit: () => {},
    history: {
      push: () => {},
    },
  };

  static contextType = GymListContext;

  handleSubmit = (e) => {
    this.props.handleSearchSubmit(e);
  };

  render() {
    return (
      <div className="SearchBox_container">
        <form
          className="SearchBox_form"
          onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmit(e.target.searchBox.value);
          }}
        >
          <label htmlFor="searchBox">Search:</label>
          <select
            type="text"
            name="searchBox"
            id="searchBox"
            placeholder="Search"
          >
            <option value="all">All Cities</option>
            <option value="san-francisco">San Francisco</option>
            <option value="sunnyvale">Sunnyvale</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="san-diego">San Diego</option>
          </select>
          <button type="submit" className="searchButton">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
