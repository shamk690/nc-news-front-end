import React, { Component } from "react";
import * as Api from "../Api";

import "./style/style.css";
import { getAllTopics } from "../Api";

export default class Topics extends Component {
  state = {
    topics: []
  };

  render() {
    return (
      <div>
        <p>Topics from article List</p>

        {this.state.topics.map(topic => {
          return (
            <div>
              <p>{topic.slug}</p>
              <p> {topic.description}</p>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    getAllTopics().then(topic => {
      this.setState({ topics: topic });
      console.log("mounted ", topic);
    });
  }
}
