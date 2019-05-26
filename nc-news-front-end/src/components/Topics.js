import React, { Component } from "react";
import { Link } from "@reach/router";
import "./style/style.css";
import { getAllTopics } from "../Api";
// import { calculateValue } from "../components/ArticlesByTopic";
export default class Topics extends Component {
  state = {
    topics: []
  };

  render() {
    //  console.log("topics  ", this.state.topics);
    // if (this.state.error) return <Error state={this.state.error} />;

    return (
      <div className="topic">
        <h2>sort by topics</h2>
        <aside>
          <ul id="topicsList">
            {this.state.topics.map((topic, index) => {
              return (
                <div id="topicsContainer" key={index}>
                  <Link to={`/topics/${topic.slug}`} className="nav-link">
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
