import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
// import Radium, { StyleRoot } from "radium";

class App extends Component {
  state = {
    persons: [
      { id: "hgfgfi", name: "Lawrence", age: 28 },
      { id: "hgf34i", name: "Manu", age: 26 },
      { id: "h5teydi", name: "Ik", age: 25 }
    ],
    showPersons: false
  };

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
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
    // Inline styling in React scoped to the component
    const style = {
      backgroundColor: "green",
      color: "white",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <div key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  changed={event => this.nameChangeHandler(event, person.id)}
                  delete={this.deletePersonHandler.bind(this, index)}
                />
              </div>
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    const className = classes.join(" ");

    return (
      <div className="App">
        <p>React Developer</p>
        <p className={className}>This is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
