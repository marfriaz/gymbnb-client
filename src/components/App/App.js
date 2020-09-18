import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import HomePage from "../../routes/HomePage/HomePage";
import GymPage from "../../routes/GymPage/GymPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import HostGymPage from "../../routes/HostGymPage/HostGymPage";
import SignUpPage from "../../routes/SignUpPage/SignUpPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import GymListPage from "../../routes/GymListPage/GymListPage";
import "./App.css";

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
            <Route exact path={"/"} component={HomePage} />
            <PublicOnlyRoute path={"/login"} component={LoginPage} />
            <PublicOnlyRoute path={"/signup"} component={SignUpPage} />
            <PrivateRoute path={"/hostgym"} component={HostGymPage} />
            <Route
              path={"/gyms/location/:gymLocation"}
              component={GymListPage}
            />
            <Route path={"/gyms/:gymId"} component={GymPage} />
            <Route path={"/gyms"} component={GymListPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer className="App__footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
