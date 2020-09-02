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
import dummyStore from "../dummy-store";
// import "./App.css";

class App extends Component {
  state = { ...dummyStore, error: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { error: true };
  }

  render() {
    const { gymList, error } = this.state;
    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          {this.state.error && (
            <p className="red">There was an error! Oh no!</p>
          )}

          <Switch>
            <Route
              exact
              path={"/"}
              render={(routeProps) => (
                <GymSearchPage
                  gymList={gymList}
                  error={error}
                  {...routeProps}
                />
              )}
            />
            <Route path={"/login"} component={LoginPage} />
            <Route path={"/signup"} component={SignUpPage} />
            <Route path={"/hostgym"} component={HostGymPage} />
            <Route
              path={"/gyms/location/:gymLocation"}
              render={(routeProps) => {
                const { gymLocation } = routeProps.match.params;
                const gyms = findGymByLocation(gymList, gymLocation) || {};
                console.log(gymLocation, 1233);

                return <GymListPage gymList={gyms} {...routeProps} />;
              }}
            />
            <Route
              path={"/gyms/:gymId"}
              render={(routeProps) => {
                const { gymId } = routeProps.match.params;
                const gym = findGym(gymList, gymId) || {};
                console.log(gymId, 123);
                return <GymPage {...routeProps} error={error} gym={gym} />;
              }}
            />

            {/* should i change this to gym???????? */}
            <Route
              path={"/gyms"}
              render={(routeProps) => (
                <GymListPage gymList={gymList} error={error} {...routeProps} />
              )}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

const findGym = (gymList = [], gymId) => gymList.find((gym) => gym.id == gymId);

const findGymByLocation = (gymList = [], gymLocation) =>
  gymList.filter((gym) => gym.location === gymLocation);
