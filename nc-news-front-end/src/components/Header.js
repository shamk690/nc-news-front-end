import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import "./style/Navbar.css";
import LoginBox from "./LoginBox";
export default class Header extends Component {
  state = {
    loginUser: ""
  };

  render() {
    console.log("state of heaer   ", this.state.loginUser);
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
                {/* <Link to="/ArticlesByTopic/">
                <li>Login</li>
              </Link> */}
                {/* <Link to="/topics">
                <li>Topics</li>
              </Link> */}
                <Link to="/loginBox">
                  {" "}
                  {!this.state.loginUser && (
                    <li id="loginListItem">login</li>
                  )}{" "}
                </Link>
                <Link to="/articles">
                  {this.state.loginUser && (
                    <li>logout &nbsp;{this.state.loginUser}</li>
                  )}{" "}
                </Link>
              </ul>
            </nav>
          </div>
        </header>
        <Router>
          {/* <LoginBox /> */}
          <LoginBox path="/loginBox" loginUser={this.loginUser} />
        </Router>
      </div>
    );
  }

  loginUser = user => {
    console.log("from headr", this.state.loginUser);
    if (user) {
      console.log("hi from header ,", user);
      this.props.loginUser(user);
      this.setState({ loginUser: user });
    }
  };
}
