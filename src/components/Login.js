import React, { Component } from "react";
import "./style/style.css";
import { getUser } from "../Api";
import { navigate } from "@reach/router";

export default class Login extends Component {
  state = {
    userNameInput: "",
    savePassword: ""
  };
  render() {
    return (
      <div className="grid">
        <form id="loginForm">
          Username:
          <input
            type="text"
            onChange={this.handleInput}
            name="usrname"
            required
            placeholder="e.g. jessjelly"
          />{" "}
          <button type="onClick" onClick={this.handleSubmit}>
            Submit
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
    this.state.userNameInput === ""
      ? alert("please enter username")
      : getUser(this.state.userNameInput)
          .then(user => {
            this.props.loginUser(user.username);
          })
          .catch(({ response: { data, status } }) => {
            navigate("/error", {
              state: { from: "user", msg: " not found ", status },
              replace: true
            });
          });
  };
}
