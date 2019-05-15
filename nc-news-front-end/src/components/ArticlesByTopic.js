import React, { Component } from "react";
import * as Api from "../Api";
import { getArticleList, getAllTopics } from "../Api";

export default class ArticlesByTopic extends Component {
  state = {
    articleList: [],
    topics: []
  };
  render() {
    console.log("state   ", this.state.articleList);
    return (
      <div>
        <h1>articles by topics</h1>
        <h1>{this.getArticleByTopic} </h1>
      </div>
    );
  }

  componentDidMount() {
    getArticleList().then(articles => {
      this.setState({ articleList: articles });
      // console.log("mounted**** ", articles);
    });
  }

  getArticleByTopic = () => {
    getAllTopics().then(topic => {
      this.setState({ topics: topic });
      console.log("topics   *** ", this.state.topics);
    });
    // console.log(this.state.topics);
  };
}
