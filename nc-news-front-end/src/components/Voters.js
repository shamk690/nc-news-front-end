import React, { Component } from "react";
import { patchComments } from "../Api";

export default class Voters extends Component {
  state = { vote: 0 };
  render() {
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
  }

  handleVotes(id, direction) {
    patchComments(id, { inc_votes: direction });
    this.setState({ vote: this.state.vote + direction });
  }
}
