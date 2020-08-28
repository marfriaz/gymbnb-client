import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default class SignUpPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleSignUpSuccess = (user) => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <Section className="SignUpPage">
        <h2>Sign Up</h2>
        <SignUpForm onSignUpSuccess={this.handleSignUpSuccess} />
      </Section>
    );
  }
}
