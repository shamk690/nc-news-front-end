import React from "react";
import { Link } from "@reach/router";

export default function Error(props) {
  console.log("from error   ", props.location.state);
  const { from, msg, status } = props.location.state;
  return (
    <div>
      <p>
        {/* from {props.location.state.msg} {props.location.state.from}{" "} */}
        {/* {props.location.state.from} {props.location.state.msg} {"  "} status :{" "} */}
        {/* {props.location.state.status}..... */}
        {from} {msg} {"  "} status : {status}.....
      </p>
      <Link to="/">Return To Home Page</Link>
    </div>
  );
}
