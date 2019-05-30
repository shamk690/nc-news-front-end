import React, { Component } from "react";
import { getAllTopics, submitArticle } from "../Api";
import "./style/style.css";

export default class PostArticle extends Component {
  state = {
    title: "",
    body: "",
    author: "",
    topic: "",
    topics: []
  };
  render() {
    return (
      <div className="item3">
        <h2 id="title">Add New Article</h2>

        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Important Information</legend>
            <label>Author:</label>
            <input
              type="author"
              name="author"
              id="author"
              autoFocus
              required
              disabled
              defaultValue={this.props.loggedInUser}
              placeholder="username"
            />
            <br />
            <label>Title:</label>
            <input
              type="title"
              name="title"
              id="title"
              required
              onChange={this.handleInput}
              placeholder="title"
            />
            <br />
            <label>Topic:</label>
            <select
              disabled={!this.props.loggedInUser}
              name="topic"
              id="topic"
              topic={this.state.topic}
              onChange={this.handleInput}
              required
            >
              <option defaultValue> -- select an option -- </option>
              {this.state.topics.map((topic, index) => {
                return (
                  <option key={index} name="topic" topic={this.state.topic}>
                    {topic.slug}
                  </option>
                );
              })}
            </select>
            <br />
          </fieldset>
          <fieldset>
            <legend>Write Article</legend>
            <label>Article:</label>

            <textarea
              disabled={!this.props.loggedInUser}
              placeholder={
                !this.props.loggedInUser
                  ? "Please login to write an article"
                  : "Write Article"
              }
              rows="12"
              cols="80"
              type="article"
              name="body"
              id="starting_date"
              required
              value={this.state.body}
              onChange={this.handleInput}
            />

            <br />
          </fieldset>
          <fieldset id="buttons">
            <legend>Submit Your Article</legend>
            <button disabled={!this.props.loggedInUser}>Submit</button>
            <br />
          </fieldset>
        </form>
      </div>
    );
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const body = {
      author: this.props.loggedInUser,
      body: this.state.body,
      title: this.state.title,
      topic: this.state.topic
    };
    submitArticle(body).then(article => {
      this.props.addNewArticle(article);
    });
  };

  componentDidMount() {
    getAllTopics().then(topic => {
      this.setState({ topics: topic });
    });
  }
}
