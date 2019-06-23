import React from "react";
import { Link } from "@reach/router";

export default function Error(props) {
  const { from, msg, status } = props.location.state;
  return (
    <div>
      <p>
        {from} {msg} {"  "} {status}.
      </p>
      <Link to="/">Return To Home Page</Link>
    </div>
  );
}
