import React, { Component } from "react";
// import * as Api from "../Api";
import { getArticleList } from "../Api";
import { Link } from "@reach/router";
import "./style/style.css";
import Topics from "./Topics";

export default class ArticleList extends Component {
  state = {
    articleList: []
  };
  render() {
    return (
      <div className="mainContainer">
        <ul className="articleContainer">
          {this.state.articleList.map(article => {
            return (
              <div key={article.article_id}>
                {" "}
                <p />
                <Link to={`/articles/${article.article_id}`}>
                  <li>{article.title}</li>
                </Link>
                <p>{article.body}</p>
                <p>From {article.topic}</p>
              </div>
            );
          })}
        </ul>
        <div className="topicsContainer">
          <Topics />
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.path);
    const query = { topic: this.props.topic };
    getArticleList(query).then(articles => {
      this.setState({ articleList: articles });
      // console.log("mounted ", articles);
    });
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log(this.props);
    if (prevProps.topic !== this.props.topic) {
      const query = { topic: this.props.topic };
      getArticleList(query).then(articles => {
        this.setState({ articleList: articles });
        // console.log("mounted ", articles);
      });
    }
  };

  getArticles() {}
}
