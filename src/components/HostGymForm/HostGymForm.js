import React, { Component } from "react";
import GymContext from "../../contexts/GymContext";
import GymApiService from "../../services/gym-api-service";
import { Input, Required, Button } from "../Utils/Utils";

export default class HostGymForm extends Component {
  static contextType = GymContext;

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { location, price, title, description, imgURLOne } = ev.target;

    this.setState({ error: null });
    GymApiService.postGym({
      location: location.value,
      price: price.value,
      title: title.value,
      description: description.value,
      imgURLOne: imgURLOne.value,
    })
      .then((user) => {
        location.value = "";
        price.value = "";
        title.value = "";
        description.value = "";
        imgURLOne.value = "";
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="HostGymForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="location">
          <label htmlFor="HostGymForm__location">
            Location <Required />
          </label>
          <Input
            name="location"
            type="text"
            required
            id="HostGymForm__location"
          ></Input>
        </div>
        <div className="price">
          <label htmlFor="HostGymForm__price">
            Price <Required />
          </label>
          <Input
            name="price"
            type="text"
            required
            id="HostGymForm__price"
          ></Input>
        </div>
        <div className="title">
          <label htmlFor="HostGymForm__title">
            Title <Required />
          </label>
          <Input
            name="title"
            type="text"
            required
            id="HostGymForm__title"
          ></Input>
        </div>
        <div className="description">
          <label htmlFor="HostGymForm__description">
            Description <Required />
          </label>
          <Input
            name="description"
            type="text"
            required
            id="HostGymForm__description"
          ></Input>
        </div>
        <div className="imgURLOne">
          <label htmlFor="HostGymForm__imgURLOne">
            Upload Photos <Required />
          </label>
          <Input
            name="imgURLOne"
            type="text"
            required
            id="HostGymForm__imgURLOne"
          ></Input>
        </div>

        <Button type="submit">List Up</Button>
      </form>
    );
  }
}
