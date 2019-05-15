import React, { Component } from "react";
import { getSingleArticle } from "../Api";
import Comments from "./Comments";

export default class SingleArticle extends Component {
  state = {
    singleArticle: []
  };

  render() {
    //console.log("dfdfds", this.state.author);
    return (
      <div>
        <p>{this.state.singleArticle.title}</p>
        <p>{this.state.singleArticle.author}</p>
        <p>{this.state.singleArticle.article_id}</p>
        <p>{this.state.singleArticle.topic}</p>
        <p>{this.state.singleArticle.created_at}</p>
        <p>{this.state.singleArticle.votes}</p>
        <p>{this.state.singleArticle.body}</p>
        <Comments id={this.props.article_id} />
      </div>
    );
  }

  componentDidMount() {
    getSingleArticle(this.props.article_id).then(article => {
      this.setState({ singleArticle: article });
    });
  }
}
