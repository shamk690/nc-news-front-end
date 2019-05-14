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
        <ul>
          {this.state.articleList.map(article => {
            return (
              <div id="articleContainer" key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  <li>{article.title}</li>
                </Link>
                <p>{article.body}</p>
              </div>
            );
          })}
        </ul>
        <Topics />
      </div>
    );
  }

  componentDidMount() {
    getArticleList().then(articles => {
      this.setState({ articleList: articles });
      // console.log("mounted ", articles);
    });
  }
}
