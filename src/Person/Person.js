import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p>
        Hi, my name is {props.name} and my age is {props.age} years old{" "}
        {props.children}{" "}
      </p>
      <button onClick={props.click}>Delete</button>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
