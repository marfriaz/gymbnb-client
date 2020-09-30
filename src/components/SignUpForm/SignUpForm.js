import React, { Component } from "react";
import { Button, Input, Required } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";

export default class SignUpForm extends Component {
  static defaultProps = {
    onSignUpSuccess: () => {},
  };

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { first_name, last_name, email, password } = ev.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      password: password.value,
    })
      .then((user) => {
        first_name.value = "";
        last_name.value = "";
        email.value = "";
        password.value = "";
        this.props.onSignUpSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="SignUpForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="first_name">
          <label htmlFor="SignUpForm__first_name">
            First name <Required />
          </label>
          <Input
            name="first_name"
            type="text"
            required
            id="SignUpForm__first_name"
          ></Input>
        </div>
        <div className="last_name">
          <label htmlFor="SignUpForm__last_name">
            Last Name <Required />
          </label>
          <Input name="last_name" type="text" required id="SignUpForm"></Input>
        </div>
        <div className="email">
          <label htmlFor="SignUpForm__email">
            Email <Required />
          </label>
          <Input
            name="email"
            type="email"
            required
            id="SignUpForm__email"
          ></Input>
        </div>
        <div className="password">
          <label htmlFor="SignUpForm__password">
            Password <Required />
          </label>
          <Input
            name="password"
            type="password"
            required
            id="SignUpForm__password"
          ></Input>
        </div>
        <Button className="Form-Button" type="submit">
          Sign Up
        </Button>
      </form>
    );
  }
}
