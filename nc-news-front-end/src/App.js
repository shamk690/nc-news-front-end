import React, { Component } from "react";
import Header from "./components/Header";

import { Router } from "@reach/router";
import ArticleList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
// import Topics from "./components/Topics";
import Comments from "./components/Comments";
import { navigate } from "@reach/router";
import Login from "./components/Login";
// import "../src/components/style/Navbar.css";

class App extends Component {
  state = {
    loggedInUser: ""
  };
  componentDidMount() {}
  render() {
    const { loggedInUser } = this.state;
    return (
      <div id="grid">
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
}

export default App;
