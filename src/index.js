import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import { GymListProvider } from "./contexts/GymListContext";
import "./index.css";

ReactDOM.render(
  <GymListProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GymListProvider>,
  document.getElementById("root")
);
