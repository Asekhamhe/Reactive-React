import React, { Component } from "react";
import "./App.css";
import UserOutput from "./components/UserOutput/UserOutput";
import UserInput from "./components/UserInput/UserInput";

class App extends Component {
  state = {
    username: "Ose Beast"
  };

  manipulateStateHandler = newName => {
    this.setState({
      username: newName
    });
  };

  inputChangeHandler = e => {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.username} changed={this.inputChangeHandler} />
        <br />
        <br />
        <button
          onClick={this.manipulateStateHandler.bind(this, 'Manipulated clicked button')}
        >
          Manipulate State
        </button>
        <br />
        <UserOutput username="Beast" >Child Component</UserOutput>
        <UserOutput usernameState={this.state.username} />
        <UserOutput />
      </div>
    );
  }
}

export default App;
