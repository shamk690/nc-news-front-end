import React, { Component } from "react";
// import * as Api from "../Api";
import { getArticleList, sortBy } from "../Api";
import { Link } from "@reach/router";
import "./style/style.css";
import Topics from "./Topics";

export default class ArticleList extends Component {
  state = {
    articleList: []
  };

  render() {
    //const { location } = this.props;
    // console.log(location.search);
    return (
      <div className="container">
        <div className="content">
          <article>
            {this.state.articleList.map(article => {
              return (
                <div key={article.article_id}>
                  {" "}
                  <p />
                  <Link
                    className="title"
                    to={`/articles/${article.article_id}`}
                  >
                    <h3>{article.title}</h3>
                  </Link>
                  <h4>{article.created_at}</h4>
                  <h4>author: {article.author}</h4>
                  <h4>comments: {article.comment_count}</h4>
                  <p>{article.body}</p>
                  <p>From {article.topic}</p>
                  <p>{article.votes}</p>
                </div>
              );
            })}
          </article>
        </div>
        <div className="topicsContainer">
          <Topics />
        </div>
      </div>
    );
  }

  componentDidMount() {
    const query = { topic: this.props.topic };
    getArticleList(query).then(articles => {
      this.setState({ articleList: articles });
    });
  }

  componentDidUpdate = (prevProps, prevState) => {
    //console.log("props for sortby", this.props);
    if (prevProps.topic !== this.props.topic) {
      const query = { topic: this.props.topic };
      getArticleList(query).then(articles => {
        this.setState({ articleList: articles });
      });
    } else if (prevProps.location.search !== this.props.location.search) {
      // console.log("search   ", this.props.location.search);
      sortBy(this.props.location.search).then(articles => {
        this.setState({ articleList: articles });
      });
      this.props.location.search = "";
    }
  };
}
