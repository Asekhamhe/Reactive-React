import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    console.log("[Person.js] getDerivedStateFromProps");
    return state;
  }

  // React code optimization
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("[Persons.js] getSnapBeforeUpdate");
    return { message: "Hello get snap shot." };
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  // Cleanup work with lifecycle hooks
  componentWillUnmount() {
    console.log("[Person.js] will unmount");
  }

  render() {
    console.log("[Persons.js] rendering....");
    return this.props.persons.map((person, index) => (
      <Person
        key={index}
        name={person.name}
        age={person.age}
        changed={event => this.props.changed(event, person.id)}
        click={this.props.clicked.bind(this, index)}
      />
    ));
  }
}
export default Persons;
