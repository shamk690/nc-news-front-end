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
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/articles" className="nav-link">
              Articles
            </Link>

            <div className="dropdown">
              <button className="dropbtn">Sort by</button>
              <div className="dropdown-content">
                <Link to="/articles?sort_by=created_at" className="nav-link">
                  Created_at
                </Link>
                <Link to="/articles?sort_by=comment_count" className="nav-link">
                  Comment count
                </Link>
                <Link to="/articles?sort_by=votes" className="nav-link">
                  votes{" "}
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
                  logOut {this.props.loggedInUser}
                </button>
              )}{" "}
            </Link>
          </nav>
        </div>
      </div>
    );
  }
}
