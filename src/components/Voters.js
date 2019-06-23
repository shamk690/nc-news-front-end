import React, { Component } from "react";
import { patchComments, patchArticles } from "../Api";
import { Link } from "@reach/router";
import up from "./style/tu.png";
import down from "./style/td.png";
export default class Voters extends Component {
  state = { vote: 0, value: true, change: true };
  render() {
    if (this.props.loggedInUser) {
      return (
        <div>
          <button
            className="vote"
            onClick={() => this.handleVotes(this.props.id, 1)}
            disabled={this.state.vote === 1}
          >
            <img src={up} alt="" title="Like" />
          </button>
          &nbsp;
          <button
            className="vote"
            onClick={() => this.handleVotes(this.props.id, -1)}
            disabled={this.state.vote === -1}
          >
            <img className="vote" src={down} alt="" title="Dislike" />
          </button>
          <p>Votes: {this.state.vote + this.props.votes}</p>
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
    this.setState({ vote: this.state.vote + direction, change: false });
  }
}
