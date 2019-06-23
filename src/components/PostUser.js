import React, { Component } from "react";
import { postUser } from "../Api";
import "./style/style.css";
import { navigate } from "@reach/router";

export default class PostUser extends Component {
  state = {
    username: "",
    name: "",
    avatar_url: ""
  };
  render() {
    return (
      <div className="becomeMember">
        <h3 className="signUpUserHeading">Become a Member</h3>

        <form onSubmit={this.handleSubmit} className="signUpForm">
          <fieldset>
            <legend>Sign Up Form</legend>
            <label className="signup">Username : </label>
            <input
              type="username"
              name="username"
              id="username"
              autoFocus
              required
              onChange={this.handleInput}
              placeholder="username"
            />
            <br />
            <label className="signup">Name :</label>
            <input
              type="name"
              name="name"
              id="name"
              required
              onChange={this.handleInput}
              placeholder="name"
            />
            <br />
            <label className="signup">Avatar Url:</label>
            <input
              required
              name="avatar_url"
              id="url"
              placeholder="url"
              onChange={this.handleInput}
            />
            <br />
            <button id="btn">Submit</button>

            <br />
          </fieldset>
        </form>
      </div>
    );
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const body = {
      username: this.state.username,
      name: this.state.name,
      avatar_url: this.state.avatar_url
    };
    postUser(body).then(user => {
      navigate(`/users`);
    });
  };
}
