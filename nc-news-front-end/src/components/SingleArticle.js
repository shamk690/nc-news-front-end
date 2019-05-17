import React, { Component } from "react";
import { getSingleArticle } from "../Api";
import Comments from "./Comments";
import Voters from "./Voters";

export default class SingleArticle extends Component {
  state = {
    singleArticle: null
  };

  render() {
    if (this.state.singleArticle) {
      return (
        <div>
          <p>{this.state.singleArticle.title}</p>
          {/* <p>{this.state.singleArticle.author}</p> */}
          <p>{this.state.singleArticle.article_id}</p>
          {/* <p>{this.state.singleArticle.topic}</p> */}
          <p>{this.state.singleArticle.created_at}</p>
          <p>{this.state.singleArticle.body}</p>

          <Voters
            votes={this.state.singleArticle.votes}
            loggedInUser={this.props.loggedInUser}
            id={this.state.singleArticle.article_id}
            type="article"
          />

          <Comments
            id={this.props.article_id}
            loggedInUser={this.props.loggedInUser}
          />
        </div>
      );
    } else {
      return <h1>loading....</h1>;
    }
  }

  componentDidMount() {
    getSingleArticle(this.props.article_id).then(article => {
      this.setState({ singleArticle: article });
    });
  }
}
