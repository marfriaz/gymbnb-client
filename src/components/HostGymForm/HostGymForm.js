import React, { Component } from "react";
import GymContext from "../../contexts/GymContext";
import GymApiService from "../../services/gym-api-service";
import { Input, Required, Button } from "../Utils/Utils";

export default class HostGymForm extends Component {
  static contextType = GymContext;

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();

    this.setState({ error: null });
    GymApiService.postGym({
      location: ev.target.location.value,
      price: ev.target.price.value,
      title: ev.target.title.value,
      guests: ev.target.guests.value,
      description: ev.target.description.value,
      img_url_one: ev.target.img_url_one.value,
      img_url_two: ev.target.img_url_two.value,
      img_url_three: ev.target.img_url_three.value,
      img_url_four: ev.target.img_url_four.value,
      img_url_five: ev.target.img_url_five.value,
    })
      // .then(() => {
      //   location.value = "";
      //   price.value = "";
      //   title.value = "";
      //   description.value = "";
      //   img_url_one.value = "";
      // })

      .then((data) => {
        console.log("from api", data);
        this.context.setGym(data);
        // this.props.history.push(`/gyms/${gym.id}`);
      })
      .then(console.log("from context", this.context.gym))
      .then(this.props.handleCreateSubmit(ev))
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    // console.log(this.props);

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
        <div className="guests">
          <label htmlFor="HostGymForm__guests">
            Guests <Required />
          </label>
          <Input
            name="guests"
            type="text"
            required
            id="HostGymForm__guests"
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
        <div className="img_url_one">
          <label htmlFor="HostGymForm__img_url_one">
            Upload Photos <Required />
          </label>
          <Input
            name="img_url_one"
            type="text"
            required
            id="HostGymForm__img_url_one"
          ></Input>
        </div>
        <div className="img_url_two">
          <label htmlFor="HostGymForm__img_url_two">
            Upload Photos <Required />
          </label>
          <Input
            name="img_url_two"
            type="text"
            required
            id="HostGymForm__img_url_two"
          ></Input>
        </div>
        <div className="img_url_three">
          <label htmlFor="HostGymForm__img_url_three">
            Upload Photos <Required />
          </label>
          <Input
            name="img_url_three"
            type="text"
            required
            id="HostGymForm__img_url_three"
          ></Input>
        </div>
        <div className="img_url_four">
          <label htmlFor="HostGymForm__img_url_four">
            Upload Photos <Required />
          </label>
          <Input
            name="img_url_four"
            type="text"
            required
            id="HostGymForm__img_url_four"
          ></Input>
        </div>
        <div className="img_url_five">
          <label htmlFor="HostGymForm__img_url_five">
            Upload Photos <Required />
          </label>
          <Input
            name="img_url_five"
            type="text"
            required
            id="HostGymForm__img_url_five"
          ></Input>
        </div>

        <Button type="submit">List Up</Button>
      </form>
    );
  }
}
