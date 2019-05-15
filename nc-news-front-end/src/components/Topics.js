import React, { Component } from "react";
import * as Api from "../Api";
import { Link } from "@reach/router";
import "./style/style.css";
import { getAllTopics } from "../Api";

export default class Topics extends Component {
  state = {
    topics: []
  };

  render() {
    console.log("props   ", this.props);
    return (
      <div>
        <h1>Topics from article List</h1>
        <ul id="topicsList">
          {this.state.topics.map(topic => {
            return (
              <div id="topicsContainer">
                <Link to="/ArticlesByTopic">
                  <li>{topic.slug}</li>
                </Link>
                <li>{topic.description}</li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
  //   <Link to={`/articles/${article.article_id}`}>
  //   <li>{article.title}</li>
  // </Link>
  componentDidMount() {
    getAllTopics().then(topic => {
      this.setState({ topics: topic });
    });
  }
}
