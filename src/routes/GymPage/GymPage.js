import React, { Component } from "react";
import GymContext from "../../contexts/GymContext";
import GymApiService from "../../services/gym-api-service";
import { Section } from "../../components/Utils/Utils";

export default class GymPage extends Component {
  renderGym() {
    const { gym } = this.props;
    return (
      <>
        <h2>{gym.location}</h2>
        <p>{gym.imgURLOne}</p>
        <h2>{gym.title}</h2>
        <GymDescription gym={gym} />
        {gym.price}
      </>
    );
  }

  render() {
    const { error, gym } = this.props;
    let content;
    if (error) {
      content =
        error.error === `Gym doesn't exist` ? (
          <p className="red">Gym not found</p>
        ) : (
          <p className="red">There was an error</p>
        );
    } else if (!gym.id) {
      content = <div className="loading" />;
    } else {
      content = this.renderGym();
    }
    return <Section className="GymPage">{content}</Section>;
  }
}

function GymDescription({ gym }) {
  return <p className="GymPage__description">{gym.description}</p>;
}
