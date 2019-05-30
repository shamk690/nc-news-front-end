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
          Username:{" "}
          <input
            type="text"
            onChange={this.handleInput}
            name="usrname"
            required
            placeholder="username"
          />{" "}
          {/* <input
            type="checkbox"
            name="checkbox"
            onChange={this.handleCheckBox}
            // value={this.state.savePassword}
            checked={this.state.savePassword}
          /> */}
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
  // handleCheckBox = e => {
  //   if (e.target.checked) {
  //     console.log("checked");
  //     this.setState({ savePassword: "checked" });
  //     //this.props.savePass(e.target.checked);
  //   }

  //   this.props.savePass(e.target.checked);

  //   console.log(this.state.savePassword);
  // };

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
