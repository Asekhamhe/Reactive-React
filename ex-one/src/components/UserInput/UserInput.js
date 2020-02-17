import React from "react";

const UserInput = props => {
  return (
    <div>
      <input onChange={props.changed} value={props.username} type="text" />
    </div>
  );
};

export default UserInput;
