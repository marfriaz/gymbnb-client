import React, { Component } from "react";
import GymContext from "../../contexts/GymContext";
import GymApiService from "../../services/gym-api-service";
import PhotoSlideshow from "../../components/PhotoSlideshow/PhotoSlideshow";
import { Section, Input, Required } from "../../components/Utils/Utils";
import "./GymPage.css";

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
        <div className="GymPage_Photos_Container">
          <PhotoSlideshow gym={gym} />
        </div>
        <div className="GymPage_content">
          <div className="GymPage_details">
            <div className="GymPage_details_padding">
              <div className="GymPage_title">{gym.title}</div>
              <div className="GymPage_location">{gym.location}, CA</div>
              <div>
                <span className="GymPage_guests">{gym.max_guest}</span> max
                guests
              </div>

              <GymDescription gym={gym} />
            </div>
          </div>
          <div className="GymPage_checkout">
            <div className="GymPage_checkout_padding">
              <div>
                <div className="GymPage_title">
                  Book {gym.user.first_name}'s Gym:
                </div>
                <span className="GymPage_price">${gym.price}</span> per hour
              </div>
              <div className="GymPage_date_and_time">
                <div className="GymPage_date">
                  <label htmlFor="GymPage_date">
                    Date <Required />
                  </label>
                  <Input
                    name="date"
                    type="text"
                    required
                    id="GymPage_date"
                  ></Input>
                </div>

                <div className="GymPage_time">
                  <label htmlFor="GymPage_time">
                    Time <Required />
                  </label>
                  <Input
                    name="date"
                    type="text"
                    required
                    id="GymPage_time"
                  ></Input>
                </div>
              </div>
              <div>
                <div className="GymPage_guests_input">
                  <label htmlFor="GymPage_guests_input">
                    Who will be coming?
                  </label>

                  <select
                    type="text"
                    name="searchBox"
                    id="guestSelectBox"
                    placeholder="Search"
                  >
                    <MaxGuests gym={gym} />
                    {/* <option> {gym.guests}</option> */}
                  </select>
                </div>
              </div>
              <div>
                <div>
                  Once the host approves your request, you will be asked to
                  confirm it. Only then will you be charged.
                </div>
              </div>

              <div className="Purchase_button_div">
                <button className="Purchase_button button">Reserve</button>
              </div>
            </div>
          </div>
        </div>
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
    return <Section className="GymPage">{content}</Section>;
  }
}

function GymDescription({ gym }) {
  return <p className="GymPage__description">{gym.description}</p>;
}

function MaxGuests({ gym }) {
  let gymArray = [];
  for (var i = 0; i <= gym.max_guest; i++) {
    gymArray.push(i);
  }
  const gymsArrayList = gymArray.map((gym) => <option>{gym}</option>);
  return gymsArrayList;
}
