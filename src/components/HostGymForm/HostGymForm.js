import React, { Component } from "react";
import GymApiService from "../../services/gym-api-service";
import { Input, Required, Button } from "../Utils/Utils";
import "./HostGymForm.css";

export default class HostGymForm extends Component {
  state = {
    img_urls: [],
    error: null,
  };

  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  updateState = (ev) => {
    ev.preventDefault();
    var joined = this.state.img_urls.concat(ev.target.img_urls.value);
    this.setState({ img_urls: joined });
    ev.target.img_urls.value = "";
    console.log(this.state.img_urls);
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { img_urls } = this.state;
    this.setState({ error: null });
    GymApiService.postGym({
      location: ev.target.location.value,
      price: ev.target.price.value,
      title: ev.target.title.value,
      max_guest: ev.target.max_guest.value,
      description: ev.target.description.value,
      img_urls: `{${img_urls}}`,
    })

      .then((data) => {
        this.props.history.push(`/gyms/${data.id}`);
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error, img_urls } = this.state;

    const img_decon = img_urls.map((item) => (
      <div className="HostGymForm__photo_container">
        <img
          className="HostGymForm__photo"
          src={item}
          alt="Home Gym Listing Photo"
        />
      </div>
    ));

    return (
      <>
        <div className="HostGymPage_Section">
          <h2>List a Gym</h2>
          <form className="HostGymForm" onSubmit={this.handleSubmit}>
            <div role="alert">{error && <p className="red">{error}</p>}</div>
            <div className="location">
              <label htmlFor="HostGymForm__location">Location: </label>
              <select type="text" name="location" required placeholder="Search">
                <option value="san-francisco">San Francisco</option>
                <option value="sunnyvale">Sunnyvale</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="san-diego">San Diego</option>
              </select>
            </div>
            <div className="price">
              <label htmlFor="HostGymForm__price">
                Price <Required />
              </label>
              <Input
                name="price"
                type="number"
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
                name="max_guest"
                type="number"
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
            <div className="parent">
              <Button type="submit" className="button list_gym_button">
                List Gym
              </Button>
            </div>
          </form>
          <form className="HostGymForm_Image_form" onSubmit={this.updateState}>
            <div className="img_urls">
              <label htmlFor="HostGymForm__img_urls">
                <Button type="submit" className="img-button">
                  Add Image Address URL
                </Button>{" "}
                <Required />
              </label>
              <Input
                name="img_urls"
                type="text"
                required
                id="HostGymForm__img_urls"
              ></Input>
            </div>
          </form>
          <div className="Current_Images_text">Uploaded images: </div>
          <div className="Current_Images">{img_decon}</div>
        </div>
      </>
    );
  }
}
