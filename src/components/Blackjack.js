import React, { Component } from "react";
import Board from "./Board";

//

export class Blackjack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      playerScore: 0,
      dealerScore: 0,
    };
  }

  render() {
    const { step, playerScore, dealerScore } = this.state;
    return (
      <div>
        <Board
          step={step}
          playerScore={playerScore}
          dealerScore={dealerScore}
        />
      </div>
    );
  }
}

export default Blackjack;
