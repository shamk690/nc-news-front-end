import React, { Component } from "react";
import { patchComments, patchArticles } from "../Api";

export default class Voters extends Component {
  state = { vote: 0 };
  render() {
    console.log("voters props", this.props.loggedInUser);
    return (
      <div>
        <button
          onClick={() => this.handleVotes(this.props.id, 1)}
          disabled={this.state.vote === 1 || !this.props.loggedInUser}
        >
          vote up
        </button>
        <button
          onClick={() => this.handleVotes(this.props.id, -1)}
          disabled={this.state.vote === -1 || !this.props.loggedInUser}
        >
          vote down
        </button>

        <p>{this.state.vote + this.props.votes}</p>
      </div>
    );
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
