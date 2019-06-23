import React, { Component } from "react";
import { sortBy } from "../Api";
import Moment from "react-moment";
import "moment-timezone";
import { Link } from "@reach/router";

export default class ArticlesByUsers extends Component {
  state = {
    articlesByUsers: []
  };
  render() {
    const { articlesByUsers } = this.state;

    if (articlesByUsers.length) {
      return (
        <div className="grid">
          <p>{`Articles By ${this.props.username}  `}</p>{" "}
          <div className="item3">
            {articlesByUsers.map((article, index) => {
              return (
                <div className="article" key={article.article_id}>
                  <p />
                  <Link to={`/articles/${article.article_id}`} className="link">
                    <p id="title">{article.title}</p>
                  </Link>
                  <p className="article-info">author: {article.author}</p>
                  <p className="article-info">
                    {" "}
                    comments: {article.comment_count}
                  </p>
                  <p className="article-info" id="topic">
                    From: {article.topic}
                  </p>
                  <p id="vote">votes: {article.votes}</p>
                  <p id="date">
                    <Moment locale="en" format="DD/MM/YYYY">
                      {article.created_at}
                    </Moment>
                  </p>{" "}
                  <Link to={`/articles/${article.article_id}`} id="readArticle">
                    Read This Article
                  </Link>
                </div>
              );
            })}{" "}
          </div>
          <footer className="item5" />
        </div>
      );
    } else {
      return <h1>loading....</h1>;
    }
  }

  componentDidMount() {
    sortBy(`?author=${this.props.username}`).then(articles => {
      this.setState({
        articlesByUsers: articles
      });
    });
  }
}
