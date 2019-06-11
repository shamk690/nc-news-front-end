import React, { Component } from "react";
import { Link } from "@reach/router";
// import "./style/style.css";
import "./style/users.css";

import { getAllUsers } from "../Api";
export default class GetUsers extends Component {
  state = {
    users: []
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <h2>Authors</h2>
        <div className="users">
          {users.map((user, index) => {
            return (
              <Link
                to={`${user.username}/articles`}
                className="Link"
                key={index}
              >
                {" "}
                <div className="content" key={user.username}>
                  <img
                    className="img"
                    width="150"
                    height="100"
                    src={user.avatar_url}
                    alt=""
                    title="Click Me to View My Articles!"
                  />
                  <p>Username : {user.username}</p>

                  <p>Author: {user.name}</p>
                </div>
              </Link>
            );
          })}{" "}
        </div>
      </div>
    );
  }

  componentDidMount() {
    getAllUsers().then(user => {
      this.setState({ users: user });
    });
  }
}
