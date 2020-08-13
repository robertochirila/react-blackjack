import React, { Component } from "react";
import Deck from "./Deck";
import { connect } from "react-redux";

// the component will receive props from the blackjack component either dealer or player
// this will hold values regarding score and turn

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
    };
  }
  componentDidMount() {
    const { decks, type } = this.props;
    let deck;
    if (type === "player") {
      deck = decks[0];
    } else if (type === "dealer") {
      deck = decks[1];
    }
    console.log(deck);
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

const mapStateToProps = (state) => ({
  decks: state.deck.decks,
  // here I need two arrays containing two deck objects
});

export default connect(mapStateToProps)(Player);
