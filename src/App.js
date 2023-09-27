// Given a class component, add state to it
// state should have a property called `isRaining` which is a boolean
// (true if it is raining, false if not)
// Render the word "Yes" if it is raining
// or "No" if it is not raining
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itsRaining: false // Initially set it to false
    };
  }

  render() {
    const { itsRaining } = this.state;

    return (
      <div>
        <p>Is it Raining today? {itsRaining ? "Yes" : "No"}</p>
      </div>
    );
  }
}

export default App;
