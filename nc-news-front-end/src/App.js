import React, { Component } from "react";
import Header from "./components/Header";

import { Router } from "@reach/router";
import ArticleList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import Comments from "./components/Comments";
import { navigate } from "@reach/router";
import Login from "./components/Login";
import Error from "./components/Error";
import PostArticle from "./components/PostArticle";

class App extends Component {
  state = {
    loggedInUser: "",
    newList: []
  };
  componentDidMount() {}
  render() {
    console.log("app ", this.props);

    const { loggedInUser } = this.state;
    return (
      <div>
        <Header logOut={this.logOut} loggedInUser={this.state.loggedInUser} />
        <Router>
          <ArticleList path="/" />

          <ArticleList
            loggedInUser={loggedInUser}
            path="/articles"
            addNewArticle={this.addNewArticle}
            // deleteUserArticle={this.deleteUserArticle}
          />
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
        </Router>
      </div>
    );
  }

  loginUser = username => {
    if (username) {
      this.setState({ loggedInUser: username }, () => navigate("/articles"));
    }
  };
  logOut = () => {
    this.setState({ loggedInUser: "" }, () => navigate("/"));
  };

  addNewArticle = newList => {
    this.setState({ newList: newList }, () => navigate("/articles"));
    console.log("newlist", newList);
  };

  // deleteUserArticle = list => {
  //   console.log(list);
  //   this.setState({ newList: list });
  // };
}

export default App;
