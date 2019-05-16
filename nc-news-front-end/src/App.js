import React, { Component } from "react";
import Header from "./components/Header";
// import "./App.css";
import { Router } from "@reach/router";
import ArticleList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
// import Topics from "./components/Topics";
import Comments from "./components/Comments";

class App extends Component {
  state = {};
  componentDidMount() {
    // Api.getArticleList();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <ArticleList path="/" />

          <ArticleList path="/articles" />
          <ArticleList path="/topics/:topic" />

          <SingleArticle path="/articles/:article_id" />
          {/* <Topics path="/topics" /> */}
          <Comments path="/articles/:article_id/comments" />
        </Router>
      </div>
    );
  }
}

export default App;

// ```http
// GET /api/topics

// GET /api/articles

// GET /api/articles/:article_id
// PATCH /api/articles/:article_id

// GET /api/articles/:article_id/comments
// POST /api/articles/:article_id/comments

// PATCH /api/comments/:comment_id
// DELETE /api/comments/:comment_id

// GET /api/users/:username
