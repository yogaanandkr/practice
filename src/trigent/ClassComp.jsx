import React, { Component } from "react";

export default class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      revcount: 0,
    };
  }
  handleClick = () => {
    this.setState({ ...this.state, revcount: this.state.revcount + 1 });
  };

  componentDidMount() {
    console.log("hello");
  }

  render() {
    return (
      <div>
        {this.state.count}
        {this.state.revcount}
        <ChildComp name="Murugaa" state={this.state.count} />
        <button onClick={this.handleClick}>Incre</button>
      </div>
    );
  }
}

export class ChildComp extends React.Component {
  constructor() {
    super();
    this.a = {
      name: "Murugaa",
      friend: "Yoga Anand",
      fun: function () {
        return `${this.name} is friend of ${this.friend}`;
      },
    };
  }
  componentDidUpdate() {
    console.log("updated");
  }

  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        <h1>{this.props.state}</h1>
        <h1>{this.a.fun()}</h1>
      </>
    );
  }
}
