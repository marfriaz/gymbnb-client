import React from "react";
import ReactDOM from "react-dom";
import GymGridButton from "./GymGridButton";

describe("GymGridButton Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<GymGridButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
