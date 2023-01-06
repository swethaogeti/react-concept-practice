import React from "react";
import { render } from "react-dom";

export class ClassApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sweety",
      age: 22,
      role: "developer",
      count: 1
    };
  }
  componentDidMount() {
    console.log("prints for mounting");
  }

  componentDidUpdate() {
    console.log("this prints when component state or prop changes");
  }

  componentWillUnmount() {
    console.log("clean up");
  }
  render() {
    return (
      <>
        <h1>this is class component</h1>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <p>{this.props.city}</p>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increment{" "}
        </button>
      </>
    );
  }
}

export class ClassName extends React.Component {
  render() {
    return (
      <>
        <ClassApp city="hyderabad" />
      </>
    );
  }
}
