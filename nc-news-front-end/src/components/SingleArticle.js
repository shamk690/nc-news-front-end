import React, { Component } from "react";
import { getSingleArticle } from "../Api";
import Comments from "./Comments";
import Voters from "./Voters";
import "./style/style.css";
import { navigate } from "@reach/router";

export default class SingleArticle extends Component {
  state = {
    error: null,
    singleArticle: null
  };

  render() {
    if (this.state.singleArticle) {
      return (
        <div className="singleArticle">
          <p id="title">{this.state.singleArticle.title}</p>
          <p>ID : {this.state.singleArticle.article_id}</p>
          <p> Topic: {this.state.singleArticle.topic}</p>
          <p>{this.state.singleArticle.created_at}</p>
          <p>{this.state.singleArticle.body}</p>

          <Voters
            votes={this.state.singleArticle.votes}
            loggedInUser={this.props.loggedInUser}
            id={this.state.singleArticle.article_id}
            type="article"
          />

          <Comments
            id={this.props.article_id}
            loggedInUser={this.props.loggedInUser}
          />
        </div>
      );
    } else {
      return <h1>loading....</h1>;
    }
  }

  componentDidMount() {
    getSingleArticle(this.props.article_id)
      .then(article => {
        this.setState({ singleArticle: article });
      })
      .catch(({ response: { data, status } }) => {
        console.log(data, "res");

        navigate("/error", {
          state: { from: "article", msg: "resourse not found ", status },
          replace: true
        });
      });
  }
}
