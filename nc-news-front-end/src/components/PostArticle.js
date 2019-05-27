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
            <label label for="author">
              Author:
            </label>
            <input
              type="author"
              name="author"
              id="author"
              autofocus
              required
              value={this.props.loggedInUser}
              placeholder="username"
            />
            <br />
            <label for="title">Title:</label>
            <input
              type="title"
              name="title"
              id="title"
              required
              onChange={this.getTitle}
              placeholder="title"
            />
            <br />
            <label for="topic">Topic:</label>
            <select
              disabled={!this.props.loggedInUser}
              name="topic"
              id="topic"
              topic={this.state.topic}
              onChange={this.getAllTopics}
              required
            >
              <option disabled selected value>
                {" "}
                -- select an option --{" "}
              </option>
              {this.state.topics.map((topic, index) => {
                return <option topic={this.state.topic}>{topic.slug}</option>;
              })}
            </select>
            <br />
          </fieldset>
          <fieldset>
            <legend>Article Area</legend>
            <label for="article">Article:</label>

            <textarea
              disabled={!this.props.loggedInUser}
              placeholder={
                !this.props.loggedInUser
                  ? "Please login to right article"
                  : "Right Article"
              }
              rows="12"
              cols="80"
              type="article"
              name="article"
              id="starting_date"
              required
              value={this.state.body}
              onChange={this.getBody}
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
    this.setState({ author: e.target.value });
  };
  getTitle = e => {
    this.setState({ title: e.target.value });
  };

  getBody = e => {
    this.setState({ body: e.target.value });
  };
  // getTopic = e => {
  //   this.setState({ topic: e.target.value });
  // };
  getAllTopics = e => {
    this.setState({ topic: e.target.value });
    console.log(this.state.topic);
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
