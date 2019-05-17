import React, { Component } from "react";
import { getCommentByArticleId } from "../Api";
import Voters from "./Voters";
import "./style/style.css";
export default class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <div>
        <h1>Comments</h1>
        {this.state.comments.map(comment => {
          return (
            <div key={comment.comment_id}>
              {/* <p>{comment.comment_id}</p> */}
              {/* <p>{comment.created_at}</p> */}
              <p>commented by: {comment.author}</p>
              <p>{comment.body}</p>
              <Voters
                votes={comment.votes}
                id={comment.comment_id}
                loggedInUser={this.props.loggedInUser}

                // type="comment"
              />
            </div>
          );
        })}
      </div>
    );
  }
  singleCommnt;

  componentDidMount() {
    getCommentByArticleId(this.props.id).then(comments => {
      this.setState({ comments: comments });
    });
  }
}
