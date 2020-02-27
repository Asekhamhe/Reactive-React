import React, { Component } from "react";
import classes from "../Person/css/person.module.css";
import withClass from "../../hoc/withClass";
import Auxiliary from "../../hoc/Auxiliary";
import PropTypes from "prop-types";

class Person extends Component {

  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus()
  }
  
  render() {
    const style = {
      backgroundColor: "red",
      color: "white",
      border: "1px solid red",
      padding: "8px",
      cursor: "pointer",
      marginLeft: "15px"
    };
    console.log("[Person.js] rendering...");
    return (
      <Auxiliary>
        <p>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <input
          key="input1"
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
        <button key="button1" style={style} onClick={this.props.click}>
          Delete Person
        </button>
      </Auxiliary>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
