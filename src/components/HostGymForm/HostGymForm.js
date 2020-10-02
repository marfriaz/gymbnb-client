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
    let addedImage = ev.target.img_urls.value.replace(",", "");
    let joined = this.state.img_urls.concat(addedImage);
    this.setState({ img_urls: joined });
    ev.target.img_urls.value = "";
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

  handleDelete = (index) => {
    const { img_urls } = this.state;
    img_urls.splice(index, 1);
    this.setState({ img_urls: img_urls });
  };

  render() {
    const { error, img_urls } = this.state;

    const img_decon = img_urls.map((item, index) => (
      <div key={index} className="HostGymForm__photo_container">
        <img className="HostGymForm__photo" src={item} alt="Home Gym Listing" />
        <button
          className="Img__delete button"
          onClick={() => this.handleDelete(index)}
        >
          Delete
        </button>
      </div>
    ));

    return (
      <>
        <div className="HostGymPage_Section">
          <h2>List a Gym</h2>

          <form className="HostGymForm" onSubmit={this.handleSubmit}>
            <div role="alert">{error && <p className="red">{error}</p>}</div>
            <div className="location">
              <label className="Form_Label" htmlFor="HostGymForm__location">
                Location:&nbsp;
              </label>
              <select type="text" name="location" required placeholder="Search">
                <option value="san-francisco">San Francisco</option>
                <option value="sunnyvale">Sunnyvale</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="san-diego">San Diego</option>
              </select>
            </div>
            <div className="price">
              <label className="Form_Label" htmlFor="HostGymForm__price">
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
              <label className="Form_Label" htmlFor="HostGymForm__title">
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
              <label className="Form_Label" htmlFor="HostGymForm__guests">
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
              <label className="Form_Label" htmlFor="HostGymForm__description">
                Description <Required />
              </label>
              <textarea
                id="HostGymForm__description"
                name="description"
                required
                rows="4"
                cols="40"
              ></textarea>
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
              <textarea
                name="img_urls"
                type="text"
                required
                id="HostGymForm__img_urls"
                rows="4"
                cols="40"
              >
                Please ensure you have a valid Image Address URL.
              </textarea>
            </div>
          </form>
          <div className="Current_Images_text">Uploaded images: </div>
          <div className="Current_Images">{img_decon}</div>
        </div>
      </>
    );
  }
}
