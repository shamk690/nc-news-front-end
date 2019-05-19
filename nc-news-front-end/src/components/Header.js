import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "./style/style.css";
import logo from "./style/logo.png";

export default class Header extends Component {
  state = {
    loginUser: ""
  };

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" title="" />
          </div>

          <nav>
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  <span className="home" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles" className="nav-link">
                  <span className="articles" />
                  Articles
                </Link>
              </li>

              <li>
                <Link to="/articles?sort_by=created_at" className="nav-link">
                  created_at
                </Link>
              </li>

              <li>
                <Link to="/articles?sort_by=comment_count" className="nav-link">
                  comment count
                </Link>
              </li>

              <li>
                <Link to="/articles?sort_by=votes" className="nav-link">
                  votes{" "}
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link">
                  {" "}
                  {!this.props.loggedInUser ? (
                    <li> login</li>
                  ) : (
                    <button onClick={this.props.logOut} className="nav-link">
                      {" "}
                      logOut {this.props.loggedInUser}
                    </button>
                  )}{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
