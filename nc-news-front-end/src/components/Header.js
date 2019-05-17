import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "./style/Navbar.css";
export default class Header extends Component {
  state = {
    loginUser: ""
  };

  render() {
    return (
      <div>
        <header>
          <h1 id="logo">&nbsp;NC-NEWS</h1>

          <div className="navContainer">
            <nav>
              <ul className="manubar">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/articles">
                  <li>Articles</li>
                </Link>
                <Link to="/articles?sort_by=created_at">
                  <li>created_at</li>
                </Link>
                <Link to="/articles?sort_by=comment_count">
                  <li>comment count</li>
                </Link>
                <Link to="/articles?sort_by=votes">
                  <li>votes</li>
                </Link>

                <Link to="/login">
                  {" "}
                  {!this.props.loggedInUser ? (
                    <li>login</li>
                  ) : (
                    <button onClick={this.props.logOut}>
                      {" "}
                      logOut {this.props.loggedInUser}
                    </button>
                  )}{" "}
                </Link>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
