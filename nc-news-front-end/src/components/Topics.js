import React, { Component } from "react";
import * as Api from "../Api";
import { Link } from "@reach/router";
import "./style/style.css";
import { getAllTopics } from "../Api";
// import { calculateValue } from "../components/ArticlesByTopic";
export default class Topics extends Component {
  state = {
    topics: []
  };

  render() {
    // console.log("props   ", this.props);
    return (
      <div>
        <h1>Topics from article List</h1>
        <ul id="topicsList">
          {this.state.topics.map((topic, index) => {
            return (
              <div id="topicsContainer" key={index}>
                <Link to={`/topics/${topic.slug}`}>
                  <li>{topic.slug}</li>
                  <li>{topic.description}</li>
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    getAllTopics().then(topic => {
      this.setState({ topics: topic });
    });
  }
}
