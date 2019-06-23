import React, { Component } from "react";
import { getSingleArticle } from "../Api";
import Comments from "./Comments";
import Voters from "./Voters";
import Moment from "react-moment";
import "moment-timezone"; //
import "./style/style.css";
import { navigate } from "@reach/router";

export default class SingleArticle extends Component {
  state = {
    error: null,
    singleArticle: null
  };

  render() {
    const { singleArticle } = this.state;
    if (singleArticle) {
      return (
        <div className="singleArticle">
          <p id="title">{singleArticle.title}</p>
          <p>ID : {singleArticle.article_id}</p>
          <p> Topic: {singleArticle.topic}</p>
          <Moment locale="en" format="DD/MM/YYYY">
            {singleArticle.created_at}
          </Moment>
          <p>{singleArticle.body}</p>

          <Voters
            votes={singleArticle.votes}
            loggedInUser={this.props.loggedInUser}
            id={singleArticle.article_id}
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
        navigate("/error", {
          state: { from: "Article", msg: " Not Found ", status },
          replace: true
        });
      });
  }
}
