import React from "react";
import env from "./env/config.env.json"
export default class App extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      env.message
    );
  }
}
