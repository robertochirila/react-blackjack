import React, { Component } from "react";

// the button component that receives props from the board component
// this component will be connected to the store and will dispatch actions to the store

export class Button extends Component {
  componentDidMount() {
    console.log("Button component rendered");
    console.log(this.props);
  }
  shuffleDeck = () => {
    console.log("shuffle deck event");
  };
  handleHit = () => {
    console.log("handle hit event");
  };
  handleStay = () => {
    console.log("handle stay");
  };
  render() {
    const { type } = this.props;
    return (
      <React.Fragment>
        <input
          type="button"
          value={type}
          onClick={type === "shuffle" ? this.shuffleDeck : this.handleHit}
        />
      </React.Fragment>
    );
  }
}

export default Button;
