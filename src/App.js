import React, { Component } from "react";
import "./App.css";

import Keyboard from "./Keyboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      textInputBox: "",
    };
  }

   delete = () => {
    this.setState({
      textInputBox: "",
    });
  };

  backspace = () => {
    this.setState({
      textInputBox: this.state.textInputBox.slice(0, -1),
    });
  };

  onClick = (btn) => {
    if (btn === "Del") {
      this.delete();
    } else if (btn === "Back") {
      this.backspace();
    } else {
      this.setState({
        textInputBox: this.state.textInputBox + btn,
      });
    }
  };
 
  render() {
    return (
      <div>
        <div className="number-body">
          <Keyboard onClick={this.onClick} textInputBox={this.state.textInputBox} />
        </div>
      </div>
    );
  }
}

export default App;

