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
        {this.props.loggedInUser && (
          <form onSubmit={this.handleSubmit}>
            <textarea
              maxlength="300"
              rows="12"
              cols="80"
              type="text"
              name="comment"
              required
              placeholder="Enter Comment"
              onChange={this.handleInput}
              value={this.state.userInput}
            />
            <br />
            <button id="postCommentBtn">Post Comment</button>
          </form>
        )}
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
    this.setState({ userInput: "" });
  };
}
