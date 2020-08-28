import React, { Component } from "react";

const GymListContext = React.createContext({
  gymList: [],
  gymListCount: "",
  error: null,
  setError: () => {},
  clearError: () => {},
  setGymList: () => {},
});
export default GymListContext;

export class GymListProvider extends Component {
  state = {
    gymList: [],
    error: null,
  };

  setGymList = (gymList) => {
    this.setState({ gymList });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      gymList: this.state.gymList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGymList: this.setGymList,
    };
    return (
      <GymListContext.Provider value={value}>
        {this.props.children}
      </GymListContext.Provider>
    );
  }
}
