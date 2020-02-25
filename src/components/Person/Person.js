import React from "react";
import "./Person.css"; 


const Person = props => {
  const style = {
    backgroundColor: "red",
    color: "white",
    border: "1px solid red",
    padding: "8px",
    cursor: "pointer",
    marginLeft: "15px",
  };

  return (
    <div className="Person">
      <p>
        I'm a {props.name} and I am {props.age} years old!
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
      <button style={style} onClick={props.delete}>Delete Person</button>
    </div>
  );
};

export default Person;
