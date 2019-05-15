import React, { Component } from "react";
import { Link } from "@reach/router";
import "./style/Navbar.css";
export default class Header extends Component {
  render() {
    return (
      <header>
        <h1 id="logo">NC-NEWS</h1>

        <div className="navContainer">
          <nav>
            <ul className="manubar">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/articles">
                <li>Articles</li>
              </Link>
              <Link to="/">
                <li>date created</li>
              </Link>
              <Link to="/">
                <li>comment_count</li>
              </Link>
              <Link to="/">
                <li>votes</li>
              </Link>
              {/* <Link to="/ArticlesByTopic/">
                <li>Login</li>
              </Link> */}
              {/* <Link to="/topics">
                <li>Topics</li>
              </Link> */}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
