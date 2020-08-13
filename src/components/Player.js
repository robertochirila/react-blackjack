import React, { Component } from "react";

// the component will receive props from the blackjack component either dealer or player
// this will hold values regarding score and turn

export class Player extends Component {
  componentDidMount() {
    console.log("Player component rendered");
    console.log(this.props);
  }
  render() {
    return <div></div>;
  }
}

export default Player;
