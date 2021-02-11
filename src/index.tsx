import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Task1 extends React.Component {
  render() {
    return React.createElement("div", null, `Task 1 React.CreateElement`);
  }
}

class Task2 extends React.Component<any> {
  render() {
    return <div>Task 2 React.Component</div>;
  }
}

class Task3 extends React.PureComponent<any> {
  render() {
    return <div>Task 3 React.PureComponent</div>;
  }
}

function Task4() {
  return <div>Task 4 Functional component</div>;
}

ReactDOM.render(
  <div>
    <Task1></Task1>
    <Task2></Task2>
    <Task3></Task3>
    <Task4></Task4>
  </div>,
  document.getElementById("root")
);
