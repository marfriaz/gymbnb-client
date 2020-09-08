import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDumbbell,
  faSearch,
  faListOl,
  faPenAlt,
  faGlobeAmericas,
  faBookOpen,
  faComment,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

import { GymListProvider } from "./contexts/GymListContext";
import { GymProvider } from "./contexts/GymContext";
import "./index.css";

library.add(
  faDumbbell, // logo
  faSearch, // style: listicle
  faListOl, // style: howto
  faGlobeAmericas, // style: news
  faPenAlt, // style: interview
  faBookOpen, // style: story
  faComment,
  faQuoteLeft
);

ReactDOM.render(
  <BrowserRouter>
    <GymListProvider>
      <GymProvider>
        <App />
      </GymProvider>
    </GymListProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
