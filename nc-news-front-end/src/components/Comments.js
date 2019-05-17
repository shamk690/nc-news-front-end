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
      <div>
        <h1>Comments</h1>
        <PostComment
          loggedInUser={this.props.loggedInUser}
          addNewComment={this.addNewComment}
          id={this.props.id}
        />

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
              <button
                disabled={this.props.loggedInUser !== comment.author}
                onClick={() => this.handleDelete(comment.comment_id)}
              >
                Delete
              </button>
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
    console.log("id  ", id);
    deleteComment(id).then(() => {
      const filterComment = this.state.comments.filter(comment => {
        return comment.comment_id !== id;
      });
      this.setState({ comments: filterComment });
    });
  };
}
