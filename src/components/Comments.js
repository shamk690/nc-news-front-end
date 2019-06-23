import React, { Component } from "react";
import { getCommentByArticleId, deleteComment } from "../Api";
import Voters from "./Voters";
import "./style/style.css";
import PostComment from "./PostComment";
export default class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <div className="item3">
        <PostComment
          loggedInUser={this.props.loggedInUser}
          addNewComment={this.addNewComment}
          id={this.props.id}
        />
        <h1 id="h1Comment">Comments</h1>

        {this.state.comments.map(comment => {
          return (
            <div className="comments" key={comment.comment_id}>
              <p id="title">commented by: {comment.author}</p>
              <p>{comment.body}</p>
              <Voters
                votes={comment.votes}
                id={comment.comment_id}
                loggedInUser={this.props.loggedInUser}
              />
              {this.props.loggedInUser === comment.author && (
                <button
                  disabled={this.props.loggedInUser !== comment.author}
                  onClick={() => this.handleDelete(comment.comment_id)}
                >
                  Delete
                </button>
              )}
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

  addNewComment = comment => {
    this.setState(prevState => {
      const newComments = prevState.comments.map(comment => {
        return { ...comment };
      });
      return { comments: [comment, ...newComments] };
    });
  };

  handleDelete = id => {
    deleteComment(id).then(() => {
      const filterComment = this.state.comments.filter(comment => {
        return comment.comment_id !== id;
      });
      this.setState({ comments: filterComment });
    });
  };
}
