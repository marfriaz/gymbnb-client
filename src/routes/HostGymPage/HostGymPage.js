import React, { Component } from "react";
import Description from "../../components/Description/Description";
import HostGymForm from "../../components/HostGymForm/HostGymForm";

export default class CommentForm extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  render() {
    return (
      <>
        <Description />
        <HostGymForm
          history={this.props.history}
          handleCreateSubmit={(event) => this.handleSubmit(event)}
        />
      </>
    );
  }
}
