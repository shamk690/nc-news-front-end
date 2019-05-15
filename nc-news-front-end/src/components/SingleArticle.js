import React, { Component } from "react";
import { getSingleArticle, patchArticles } from "../Api";
import Comments from "./Comments";

export default class SingleArticle extends Component {
  state = {
    vote: 0,
    singleArticle: [],
    buttonClicked: false
  };

  render() {
    //console.log("dfdfds", this.state.author);
    return (
      <div>
        <p>{this.state.singleArticle.title}</p>
        {/* <p>{this.state.singleArticle.author}</p> */}
        {/* <p>{this.state.singleArticle.article_id}</p> */}
        {/* <p>{this.state.singleArticle.topic}</p> */}
        <p>{this.state.singleArticle.created_at}</p>
        <p>{this.state.singleArticle.body}</p>
        <p>vote:{this.state.singleArticle.votes + this.state.vote}</p>
        <button
          onClick={() => this.handleClick(1)}
          disabled={this.state.vote === 1}
        >
          vote up
        </button>
        <button
          onClick={() => this.handleClick(-1)}
          disabled={this.state.vote === -1}
        >
          vote down
        </button>

        <Comments id={this.props.article_id} />
      </div>
    );
  }

  componentDidMount() {
    getSingleArticle(this.props.article_id).then(article => {
      this.setState({ singleArticle: article });
    });
  }

  handleClick(direction) {
    patchArticles(this.props.article_id, { inc_votes: direction });
    this.setState(prevState => {
      const newVotes = prevState.vote + direction;
      return {
        vote: newVotes,
        buttonClicked: true
      };
    });
  }
}
