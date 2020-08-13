import React, { Component } from "react";
import Board from "./Board";

//

export class Blackjack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
  }

  render() {
    const { step } = this.state;
    return (
      <div>
        <Board step={step} />
      </div>
    );
  }
}

export default Blackjack;
