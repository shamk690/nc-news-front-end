import React, { Component } from "react";
import "./style/style.css";
import { getUser } from "../Api";
import ArticleList from "./ArticlesList";
import Topics from "./Topics";
export default class Login extends Component {
  state = {
    userNameInput: ""
  };
  render() {
    return (
      <div className="container">
        <form id="loginForm">
          <lable>
            username:
            <input type="text" onChange={this.handleInput} />
            <button type="onClick" onClick={this.handleSubmit}>
              submit
            </button>
          </lable>
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
      this.props.loginUser(user.username);
    });
  };
}
