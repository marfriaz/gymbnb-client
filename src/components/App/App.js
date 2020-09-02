import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
// import PrivateRoute from "../Utils/PrivateRoute";
// import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import GymSearchPage from "../../routes/GymSearchPage/GymSearchPage";
import GymPage from "../../routes/GymPage/GymPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import HostGymPage from "../../routes/HostGymPage/HostGymPage";
import SignUpPage from "../../routes/SignUpPage/SignUpPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import GymListPage from "../../routes/GymListPage/GymListPage";
// import "./App.css";

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}

          <Switch>
            <Route exact path={"/"} component={GymSearchPage} />
            <Route path={"/login"} component={LoginPage} />
            <Route path={"/signup"} component={SignUpPage} />
            <Route path={"/hostgym"} component={HostGymPage} />
            <Route path={"/gyms/:location"} component={GymListPage} />
            <Route path={"/gym/:gymId"} component={GymPage} />
            {/* should i change this to gyms???????? */}
            <Route path={"/gyms"} component={GymListPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
