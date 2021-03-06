import React, { Component } from "react";
import { postTopic } from "../Api";
import "./style/style.css";
import { navigate } from "@reach/router";

export default class PostTopic extends Component {
  state = {
    slug: "",
    description: ""
  };
  render() {
    return (
      <div className="item3">
        <h2 id="title">Add New Topic</h2>

        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Important Information</legend>
            <label>Slug :</label>
            <input
              title={!this.props.loggedInUser && "Login to add new topic"}
              type="slug"
              name="slug"
              id="slug"
              autoFocus
              required
              disabled={!this.props.loggedInUser}
              onChange={this.handleInput}
              placeholder={"Topic"}
            />

            <br />
            <label>Description:</label>
            <input
              title={!this.props.loggedInUser && "Login to add description"}
              type="description"
              name="description"
              id="description"
              required
              onChange={this.handleInput}
              disabled={!this.props.loggedInUser}
              placeholder={"Description"}
            />
            <br />

            <button disabled={!this.props.loggedInUser}>Submit</button>

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
      slug: this.state.slug,
      description: this.state.description
    };
    postTopic(body).then(topic => {
      navigate(`/topics`);
    });
  };
}
