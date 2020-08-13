import React, { Component } from "react";
import { Deck } from "./Deck";

// the component will receive props from the blackjack component either dealer or player
// this will hold values regarding score and turn

export class Player extends Component {
  componentDidMount() {
    console.log("Player component rendered");
    console.log(this.props);
  }
  render() {
    const { type } = this.props;
    return (
      <div>
        {type === "player" ? (
          <Deck type={"player"} />
        ) : (
          <Deck type={"dealer"} />
        )}
      </div>
    );
  }
}

export default Player;
