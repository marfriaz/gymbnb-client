import React, { Component } from "react";

const GymListContext = React.createContext({
  gymList: [],
  gymListCount: "",
  location: "",
  error: null,
  setError: () => {},
  clearError: () => {},
  setGymList: () => {},
  setLocation: () => {},
});
export default GymListContext;

export class GymListProvider extends Component {
  state = {
    gymList: [],
    gymListCount: "",
    location: "",
    error: null,
  };

  setGymList = (gymList) => {
    this.setState({ gymList });
    // this.setGymCount(gymList);
  };

  // setGymCount = (gymList) => {
  //   const count = gymList.length;
  //   this.setState.gymListCount({ count });
  // };

  // setLocation = (gymLocation) => {
  //   this.setState({ location: `${gymLocation}` });
  // };

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
      gymListCount: this.state.gymListCount,
      location: this.state.location,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGymList: this.setGymList,
      setLocation: this.setLocation,
      // setGymCount: this.setGymCount,
    };
    return (
      <GymListContext.Provider value={value}>
        {this.props.children}
      </GymListContext.Provider>
    );
  }
}
