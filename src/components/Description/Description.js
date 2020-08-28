import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Description extends Component {
  render() {
    const content = [
      {
        icon: <FontAwesomeIcon className="green" icon="dumbbell" />,
        title: "List your gym for free",
        description:
          "Set your price, add photos and details, and we'll make your listing live and ready to be seen by millions of people looking for a quick relaxation.",
      },
      {
        icon: <FontAwesomeIcon className="green" icon="dumbbell" />,
        title: "Accept reservations",
        description:
          "Message with guests and accept bookings through the Gymbnb's platform. Once you confirm it's cool with you, and the guest confirms their coming, your guests will receive information on how to get there and how to enter and exit the gym area.",
      },
      {
        icon: <FontAwesomeIcon className="green" icon="dumbbell" />,
        title: "Get Paid",
        description:
          "Guests are charged upfront through Gymbnb's secure payment system. Your payout is directly deposited after each booking, minus our 15% service fee.",
      },
    ];
    const list = content.map((item) => (
      <div className="points">
        {item.icon}
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    ));

    return (
      <section>
        <h2>How it Works</h2>
        {list}
      </section>
    );
  }
}
