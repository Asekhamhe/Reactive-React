import React, { Component } from "react";
import styles from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../components/hoc/withClass";
import Auxiliary from "../components/hoc/Auxiliary";
import AuthContext from "../components/context/AuthContext";

// import Radium, { StyleRoot } from "radium";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "hgfgfi", name: "Lawrence", age: 28 },
      { id: "hgf34i", name: "Manu", age: 26 },
      { id: "h5teydi", name: "Ik", age: 25 }
    ],
    showPersons: false,
    showCockpit: true,
    showCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // The three most important hooks
  componentDidMount() {
    console.log("[App.js] componentDidMount...");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate.");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("[App.js] componentDidUpdate");
  }

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((state, props) => {
      return {
        persons,
        showCounter: state.showCounter + 1
      };
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  deletePersonHandler = index => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons
    });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <Auxiliary>
        <button
          onClick={() => {
            this.setState({
              showCockpit: false
            });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider>
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonHandler}
              showPersons={this.state.showPersons}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Auxiliary>
    );
  }
}

export default withClass(App, styles.App);
