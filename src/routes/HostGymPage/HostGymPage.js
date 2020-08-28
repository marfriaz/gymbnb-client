import React, { Component } from "react";
import GymContext from "../../contexts/GymContext";
import GymApiService from "../../services/gym-api-service";
import Description from "../../components/Description/Description";
import HostGymForm from "../../components/HostGymForm/HostGymForm";

export default class CommentForm extends Component {
  static contextType = GymContext;

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { article } = this.context;
    const { text } = ev.target;
    GymApiService.postComment(article.id, text.value)
      .then(this.context.addComment)
      .then(() => {
        text.value = "";
      })
      .catch(this.context.setError);
  };

  render() {
    return (
      <>
        <Description />
        <HostGymForm />
      </>
    );
  }
}
