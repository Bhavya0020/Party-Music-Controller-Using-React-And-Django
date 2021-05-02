import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
    // return <h1> {this.props.name} </h1>;
  }
}

const appDiv = document.getElementById("app");
render(<App name= "Tim" />, appDiv);