import React, { Component } from "react";
// import "./SearchBox.css";

class SearchBox extends Component {
  static defaultProps = {
    onSubmit: () => {},
    history: {
      push: () => {},
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push("/gyms");
  };

  render() {
    return (
      <form className="SearchBox" onSubmit={this.handleSubmit}>
        <label htmlFor="search-box">Search:</label>
        <select type="text" name="search-box" id="search-box">
          <option value="all">All Cities</option>
          <option value="san-francisco">San Francisco</option>
          <option value="los-angeles">Los Angeles</option>
          <option value="san-diego">San Diego</option>
        </select>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBox;
