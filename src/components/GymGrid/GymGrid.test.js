import React from "react";
import ReactDOM from "react-dom";
import GymGrid from "./GymGrid";

describe("GymGrid Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<GymGrid />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
