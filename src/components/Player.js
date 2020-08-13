import React, { Component } from "react";
import PlayerDeck from "./PlayerDeck";
import DealerDeck from "./DealerDeck";
import { connect } from "react-redux";

// the component will receive props from the blackjack component either dealer or player
// this will hold values regarding score and turn

class Player extends Component {
  render() {
    const { type, deck } = this.props;

    console.log(type);
    return (
      <div>
        {type === "player" ? (
          <React.Fragment>
            <h3>{type}</h3>
            <PlayerDeck type={"player"} type={"player"} deck={deck} key={1} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3>{type}</h3>
            <DealerDeck type={"dealer"} type={"dealer"} deck={deck} key={2} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  deck: state.deck.deck,
});

export default connect(mapStateToProps)(Player);
