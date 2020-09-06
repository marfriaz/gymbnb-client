import React, { Component } from "react";
import GymContext from "../../contexts/GymContext";
import GymApiService from "../../services/gym-api-service";
import { Section } from "../../components/Utils/Utils";

export default class GymPage extends Component {
  static defaultProps = {
    match: { params: {} },
  };

  static contextType = GymContext;

  componentDidMount() {
    this.context.clearError();
    const { gymId } = this.props.match.params;

    GymApiService.getGym(gymId)
      .then(this.context.setGym)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearGym();
  }

  renderGym() {
    const { gym } = this.context;
    return (
      <>
        <h2>{gym.location}</h2>
        <GymPhotos gym={gym} />
        <h2>{gym.title}</h2>
        <GymDescription gym={gym} />
        {gym.price}
      </>
    );
  }

  render() {
    const { error, gym } = this.context;
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
    return <Section className="ArticlePage">{content}</Section>;
  }
}

function GymDescription({ gym }) {
  return <p className="GymPage__description">{gym.description}</p>;
}

function GymPhotos({ gym }) {
  return (
    <img
      className="GymGridItem__photo"
      src={gym.img_url_one}
      alt="Home Gym Listing Photo"
    />
  );
}
