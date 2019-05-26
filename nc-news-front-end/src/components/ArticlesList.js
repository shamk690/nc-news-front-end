import React, { Component } from "react";
// import * as Api from "../Api";
import { getArticleList, sortBy } from "../Api";
import { Link } from "@reach/router";
import "./style/style.css";
import Topics from "./Topics";
import { navigate } from "@reach/router";

export default class ArticleList extends Component {
  state = {
    articleList: []
  };

  render() {
    //const { location } = this.props;
    // console.log("search   ", this.props.location.search);
    // console.log(this.props);
    if (this.state.articleList.length) {
      return (
        <div className="grid">
          <div className="item3">
            {this.state.articleList.map((article, index) => {
              return (
                <div className="article" key={article.article_id}>
                  {" "}
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
                  <p id="body">{article.body}</p>
                  <p id="date">{article.created_at}</p>{" "}
                </div>
              );
            })}
          </div>
          <div className="item4">
            <Topics />
          </div>
          <footer className="item5" />
        </div>
      );
    } else {
      return <h1>loading....</h1>;
    }
  }

  componentDidMount(prevProp) {
    const query = { topic: this.props.topic };
    getArticleList(query)
      .then(articles => {
        this.setState({ articleList: articles });
      })
      .catch(({ response: { data, status } }) => {
        navigate("/error", {
          state: { from: "topic", msg: "resourse not found ", status },
          replace: true
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      const query = { topic: this.props.topic };
      getArticleList(query).then(articles => {
        this.setState({ articleList: articles });
      });
    } else if (prevProps.location.search !== this.props.location.search) {
      //console.log("search   ", this.props.location.search);
      sortBy(this.props.location.search).then(articles => {
        this.setState({ articleList: articles });
      });
      this.props.location.search = "";
    }
  }
}
