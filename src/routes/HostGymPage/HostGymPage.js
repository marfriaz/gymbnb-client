import React, { Component } from "react";
import GymContext from "../../contexts/GymContext";
import Description from "../../components/Description/Description";
import HostGymForm from "../../components/HostGymForm/HostGymForm";

export default class CommentForm extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  static contextType = GymContext;

  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(this.context.gym.id);
    this.props.history.push(`/gyms/${this.context.gym.id}`);
  };
  //   const {
  //     location,
  //     price,
  //     title,
  //     description,
  //     img_url_one,
  //   } = this.context.gym;
  //   const { text } = ev.target;
  //   GymApiService.postGym(location, price, title, description, img_url_one)
  //     .then(() => {
  //       text.value = "";
  //     })
  //     .catch(this.context.setError);
  // };

  render() {
    return (
      <>
        <Description />
        <HostGymForm handleCreateSubmit={(event) => this.handleSubmit(event)} />
      </>
    );
  }
}
