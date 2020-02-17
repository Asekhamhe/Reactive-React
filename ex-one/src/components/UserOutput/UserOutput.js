import React from "react";

const UserOutput = props => {
  return (
    <div>
      <p>First paragraph for {props.username} </p>
      <p>Second paragraph for {props.usernameState}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default UserOutput;
