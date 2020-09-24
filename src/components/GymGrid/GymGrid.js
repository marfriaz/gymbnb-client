import React, { Component } from "react";
import GymListContext from "../../contexts/GymListContext";
import { Section } from "../../components/Utils/Utils";
import GymGridItem from "../../components/GymGridItem/GymGridItem";
import GymGridButton from "../../components/GymGridButton/GymGridButton";
import "./GymGrid.css";

export default class GymGrid extends Component {
  static contextType = GymListContext;

  renderGyms() {
    const { gymList = [] } = this.context;
    const upToSix = gymList.slice(0, 6);
    return upToSix.map((gym) => <GymGridItem key={gym.id} gym={gym} />);
  }

  render() {
    const { error, gymList } = this.context;

    return (
      <>
        <Section list className="GymGrid">
          <div className="GymGridHeader">
            <h2>Available Gyms in California</h2>
          </div>
          <div className="GymGridItems_container">
            {error ? (
              <p className="red">There was an error, try again</p>
            ) : (
              this.renderGyms()
            )}
          </div>
        </Section>
        <GymGridButton gymList={gymList} />
      </>
    );
  }
}
