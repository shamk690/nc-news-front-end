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
      <div className="mainContainer">
        <div>
          <p>Topics from article List</p>
          <p>{this.state.topics.slug}</p>
          <p>{this.state.topics.description}</p>
        </div>
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
