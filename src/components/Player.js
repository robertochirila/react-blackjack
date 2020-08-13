import React, { Component } from "react";
import Deck from "./Deck";
import { connect } from "react-redux";

// the component will receive props from the blackjack component either dealer or player
// this will hold values regarding score and turn

class Player extends Component {
  render() {
    const { type, deck } = this.props;

    //console.log(deck);
    return (
      <div>
        {type === "player" ? (
          <React.Fragment>
            <h3>{type}</h3>
            <Deck type={"player"} deck={deck} key={1} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3>{type}</h3>
            <Deck type={"dealer"} deck={deck} key={2} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  decks: state.deck.decks,
});

export default connect(mapStateToProps)(Player);
