import React from "react";
import ReactDOM from "react-dom";
import PhotoSlideshow from "./PhotoSlideshow";
import { MemoryRouter } from "react-router-dom";

describe("PhotoSlideshow Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const gym = {
      id: 1,
      title: "Gym in SF",
      location: "san-francisco",
      price: 15,
      images: {
        id: 3,
        img_urls: [
          "https://live.staticflickr.com/65535/50328957172_22665abf5e_h.jpg",
          "https://live.staticflickr.com/65535/50328956702_00db80da55_h.jpg",
        ],
      },
    };
    ReactDOM.render(
      <MemoryRouter>
        <PhotoSlideshow gym={gym} />
      </MemoryRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
