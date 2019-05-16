import React, { Component } from "react";
import Header from "./components/Header";
// import "./App.css";
import { Router } from "@reach/router";
import ArticleList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
// import Topics from "./components/Topics";
import Comments from "./components/Comments";

class App extends Component {
  state = {
    loggedInUser: ""
  };
  componentDidMount() {
    // Api.getArticleList();
  }
  render() {
    console.log("hi i am from app ", this.state.loggedInUser);
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Header loginUser={this.loginUser} />
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
        </Router>
      </div>
    );
  }

  loginUser = username => {
    if (username) {
      this.setState({ loggedInUser: username });
      console.log("from app", username);
    }
  };
}

export default App;
