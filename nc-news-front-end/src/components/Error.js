import React from "react";

export default function Error(props) {
  console.log("from error   ", props.location.state);
  const { from, msg, status } = props.location.state;
  return (
    <div>
      <h2>
        {/* from {props.location.state.msg} {props.location.state.from}{" "} */}
        {/* {props.location.state.from} {props.location.state.msg} {"  "} status :{" "} */}
        {/* {props.location.state.status}..... */}
        {from} {msg} {"  "} status : {status}.....
      </h2>
    </div>
  );
}
