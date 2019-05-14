import React, { Component } from "react";
import Header from "./components/Header";
// import "./App.css";
import { Router, Link } from "@reach/router";
import * as Api from "./Api";
import HomePage from "./components/HomePage";
import ArticleList from "./components/ArticlesList";
import SingleArticle from "./components/SingleArticle";
import Topics from "./components/Topics";

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
          <HomePage path="/" />

          <ArticleList path="/articles" />
          <SingleArticle path="articles/:article_id" />
          <Topics path="/topics" />
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
