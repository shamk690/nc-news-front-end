import React, { Component } from "react";
import { postComment } from "../Api";
export default class PostComment extends Component {
  state = {
    userInput: ""
  };
  render() {
    // console.log("post comment", this.props.loggedInUser);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="comment"
            required
            disabled={!this.props.loggedInUser}
            placeholder="Enter comment"
            onChange={this.handleInput}
          />
          <button disabled={!this.props.loggedInUser}>post comment</button>
        </form>
      </div>
    );
  }

  handleInput = e => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const body = {
      username: this.props.loggedInUser,
      body: this.state.userInput
    };

    postComment(this.props.id, body).then(comment => {
      this.props.addNewComment(comment);
    });
  };
}
