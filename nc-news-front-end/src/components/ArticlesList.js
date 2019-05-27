import React, { Component } from "react";
import { getArticleList, sortBy, deleteArticle } from "../Api";
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
    //console.log("articlelist", this.props);

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
                  <button
                    disabled={this.props.loggedInUser !== article.author}
                    onClick={() => this.handleDelete(article.article_id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
          <div className="item4">
            <Topics />
          </div>
          {/* <PostArticle addNewArticle={this.addNewArticle} /> */}

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
  addNewArticle = () => {
    //addNewArticle = article => {
    // console.log("called");
    // this.setState(prevState => {
    //   const newArticle = prevState.articleList.map(article => {
    //     // console.log(article, "list");
    //     return { ...article };
    //   });
    //   return { articleList: [article, ...newArticle] };
    // });
    this.props.addNewArticle(this.state.articleList);
  };

  handleDelete = id => {
    console.log("id  ", id);
    deleteArticle(id).then(() => {
      const filterArticle = this.state.articleList.filter(article => {
        return article.article_id !== id;
      });
      this.setState({ articleList: filterArticle });
      //  this.props.deleteUserArticle(this.state.articleList);
    });
  };
}
