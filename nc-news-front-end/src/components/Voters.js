import React, { Component } from "react";
import { patchComments, patchArticles } from "../Api";
import { Link } from "@reach/router";

export default class Voters extends Component {
  state = { vote: 0, value: true };
  render() {
    // console.log(this.props.location, "loc");
    if (this.props.loggedInUser) {
      return (
        <div>
          <button
            onClick={() => this.handleVotes(this.props.id, 1)}
            disabled={this.state.vote === 1}
          >
            vote up
          </button>
          <button
            onClick={() => this.handleVotes(this.props.id, -1)}
            disabled={this.state.vote === -1}
          >
            vote down
          </button>

          <p>{this.state.vote + this.props.votes}</p>
        </div>
      );
    } else {
      return (
        <Link value={this.state.value} to="/login">
          Login to vote and post comment
        </Link>
      );
    }
  }
  handleVotes(id, direction) {
    if (this.props.type === "article") {
      patchArticles(id, { inc_votes: direction });
    } else {
      patchComments(id, { inc_votes: direction });
    }
    this.setState({ vote: this.state.vote + direction });
  }
}
