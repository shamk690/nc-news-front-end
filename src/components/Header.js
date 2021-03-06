import React, { Component } from "react";
import { Link } from "@reach/router";
import "./style/style.css";
import logo from "./style/logo-nc-news.gif";

export default class Header extends Component {
  state = {
    loginUser: ""
  };

  render() {
    return (
      <div className="main">
        <div className="grid">
          <div className="item1">
            <header>
              <Link to="/">
                <img src={logo} alt="" title="logo" />
              </Link>
              <h1> welcome to ncnews</h1>
            </header>
          </div>

          <div className="item2">
            <nav className="navbar">
              <Link to="/articles" className="nav-link">
                Home
              </Link>
              <div className="dropdown">
                <button className="dropbtn">Articles</button>
                <div className="dropdown-content">
                  <Link to="/articles" className="nav-link">
                    View Articles
                  </Link>
                  <Link to="/newarticle" className="nav-link">
                    Add New Article
                  </Link>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">Sort Articles</button>
                <div className="dropdown-content">
                  <Link to="/articles?sort_by=created_at" className="nav-link">
                    Date
                  </Link>
                  <Link
                    to="/articles?sort_by=comment_count"
                    className="nav-link"
                  >
                    Comment Count
                  </Link>
                  <Link to="/articles?sort_by=votes" className="nav-link">
                    Votes{" "}
                  </Link>
                </div>
              </div>
              <Link to="/users" className="nav-link" id="login">
                {" "}
                Authors
              </Link>
              <div className="dropdown">
                <button className="dropbtn">Topics</button>
                <div className="dropdown-content">
                  <Link to="/topics" className="nav-link" id="login">
                    {" "}
                    View Topics
                  </Link>
                  <Link to="/postTopic" className="nav-link">
                    Add New Topic
                  </Link>
                </div>
              </div>
              <Link to="/login" className="nav-link" id="login">
                {" "}
                {!this.props.loggedInUser ? (
                  <li>login </li>
                ) : (
                  <button onClick={this.props.logOut} id="logoutbtn">
                    {" "}
                    Log Out {this.props.loggedInUser}
                  </button>
                )}{" "}
              </Link>{" "}
              {!this.props.loggedInUser && (
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              )}
            </nav>{" "}
          </div>
        </div>{" "}
      </div>
    );
  }
}
