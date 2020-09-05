import React, { Component } from "react";

export const nullGym = {};

const GymContext = React.createContext({
  gym: nullGym,
  error: null,
  setError: () => {},
  clearError: () => {},
  setGym: () => {},
  clearGym: () => {},
});

export default GymContext;

export class GymProvider extends Component {
  state = {
    gym: nullGym,
    error: null,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setGym = (gym) => {
    this.setState({ gym });
  };

  clearGym = () => {
    this.setGym(nullGym);
  };

  render() {
    const value = {
      gym: this.state.gym,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGym: this.setGym,
      clearGym: this.clearGym,
    };
    return (
      <GymContext.Provider value={value}>
        {this.props.children}
      </GymContext.Provider>
    );
  }
}
