import React, { Component } from "react";
import { getCommentByArticleId } from "../Api";

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
            <div>
              <p>{comment.comment_id}</p>
              <p>{comment.created_at}</p>
              <p>{comment.author}</p>
              <p>{comment.body}</p>
              <p>{comment.votes}</p>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    getCommentByArticleId(this.props.id).then(comments => {
      this.setState({ comments: comments });
    });
  }
}
