import React, { Component } from "react";
import "./style/style.css";
import { getUser } from "../Api";

export default class LoginBox extends Component {
  state = {
    userNameInput: ""
  };
  render() {
    console.log("props from box  ", this.props);
    return (
      <div>
        <h1 id="loginFormH1">Enter username</h1>
        <form id="loginForm">
          {" "}
          <input type="text" onChange={this.handleInput} />
          <button type="onClick" onClick={this.handleSubmit}>
            submit
          </button>
        </form>
      </div>
    );
  }

  handleInput = e => {
    this.setState({ userNameInput: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    getUser(this.state.userNameInput).then(user => {
      console.log("login box  ", user);
      if (user.username === this.state.userNameInput) {
        this.props.loginUser(user.username);
      }
      // this.setState({ userNameInput: username });
    });
    // console.log("username", this.state.userNameInput);
  };
}
