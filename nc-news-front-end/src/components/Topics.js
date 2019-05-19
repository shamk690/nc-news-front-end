import React, { Component } from "react";
import { Link } from "@reach/router";
import "./style/style.css";
import { getAllTopics, sortBy } from "../Api";
// import { calculateValue } from "../components/ArticlesByTopic";
export default class Topics extends Component {
  state = {
    topics: []
  };

  render() {
    return (
      <div>
        <h1>Topics from article List</h1>
        <aside>
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
        </aside>
      </div>
    );
  }

  componentDidMount() {
    getAllTopics().then(topic => {
      this.setState({ topics: topic });
    });
  }

  // componentDidUpdate = (prevProps, prevState) => {
  //   // console.log(this.props);
  //   if (prevProps.topic !== this.props.topic) {
  //     const query = { topic: this.props.topic };
  //     getArticleList(query).then(articles => {
  //       this.setState({ articleList: articles });
  //       // console.log("mounted ", articles);
  //     });
  //   }
  // };
}
