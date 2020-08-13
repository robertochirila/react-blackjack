import React, { Component } from "react";
import { Player } from "./Player";
import Button from "./Button";

// when this component is mounted dispatch action to the reducer
// to shuffle both decks of cards
// render the button component with the correct props

export class Board extends Component {
  componentDidMount() {
    // HERE
  }
  render() {
    return (
      <div className="wrapper">
        <div className="board">
          <Player type={"player"} />
          <Player type={"dealer"} />
          <Button type={"shuffle"} />
        </div>
      </div>
    );
  }
}

export default Board;
