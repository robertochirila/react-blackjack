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
});

export default connect(mapStateToProps)(Player);
