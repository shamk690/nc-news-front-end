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
      <div className="item3">
        <h2 id="title">Add New Author</h2>

        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Important Information</legend>
            <label>Username :</label>
            <input
              type="username"
              name="username"
              id="username"
              autoFocus
              required
              disabled={!this.props.loggedInUser}
              onChange={this.handleInput}
              placeholder="username"
            />
            <br />
            <label>Name:</label>
            <input
              type="name"
              name="name"
              id="name"
              required
              onChange={this.handleInput}
              disabled={!this.props.loggedInUser}
              placeholder="name"
            />
            <br />
            <label>Avatar Url:</label>
            <input
              required
              disabled={!this.props.loggedInUser}
              name="avatar_url"
              id="url"
              placeholder="url"
              onChange={this.handleInput}
            />
            <button disabled={!this.props.loggedInUser}>Submit</button>

            <br />
          </fieldset>
        </form>
      </div>
    );
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
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
