import React, { Component } from "react";
import { postComment, getCommentByArticleId } from "../Api";
export default class PostComment extends Component {
  state = {
    userInput: ""
  };
  render() {
    // console.log("post comment", this.props.loggedInUser);

    return (
      <div>
        <form onSubmit={this.handleSubmit} required>
          <input
            type="text"
            disabled={!this.props.loggedInUser}
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
