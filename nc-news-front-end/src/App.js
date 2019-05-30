import React, { Component } from "react";
import Header from "./components/Header";
// import { Route } from "react-router-dom";

import { Router } from "@reach/router";
import ArticleList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import Comments from "./components/Comments";
import { navigate } from "@reach/router";
import Login from "./components/Login";
import Error from "./components/Error";
import PostArticle from "./components/PostArticle";
import "../src/components/style/style.css";
class App extends Component {
  state = {
    loggedInUser: "",
    article: []
  };

  render() {
    console.log("app ", this.props.location);
    const { loggedInUser } = this.state;
    return (
      <div className="maninContainer">
        <Header logOut={this.logOut} loggedInUser={this.state.loggedInUser} />
        <Router>
          <ArticleList path="/" />
          <ArticleList loggedInUser={loggedInUser} path="/articles" />
          <ArticleList path="/topics/:topic" />
          <SingleArticle
            path="/articles/:article_id"
            loggedInUser={loggedInUser}
          />
          {/* <Topics path="/topics" /> */}
          <Comments path="/articles/:article_id/comments" />
          <Login path="/login" loginUser={this.loginUser} />
          <Error path="/error" />
          <PostArticle
            path="/newarticle"
            loggedInUser={loggedInUser}
            addNewArticle={this.addNewArticle}
          />
        </Router>{" "}
      </div>
    );
  }

  loginUser = (username, url) => {
    // const { loc } = this.state.location.state.uri;

    if (username) {
      this.setState({ loggedInUser: username }, () => navigate("/articles"));
    }
  };
  logOut = () => {
    this.setState({ loggedInUser: "" }, () => navigate("/"));
  };

  addNewArticle = article => {
    this.setState({ article: article }, () =>
      navigate(`/articles/${article.article_id}`)
    );
    console.log("newlist", article);
  };

  saveData = () => {
    sessionStorage.setItem("data", JSON.stringify(this.state));
  };

  componentDidMount = () => {
    const data = sessionStorage.getItem("data");
    if (data) {
      const state = JSON.parse(data);
      this.setState(state);
    }
  };

  if(data) {
    const state = JSON.parse(data);
    this.setState(state);
  }

  componentDidUpdate = () => {
    this.saveData();
  };
}

export default App;
