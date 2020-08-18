import React, { Component } from "react";
import PlayerDeck from "./PlayerDeck";
import DealerDeck from "./DealerDeck";
import { connect } from "react-redux";

// the component will receive props from the blackjack component either dealer or player
// this will hold values regarding score and turn

class Player extends Component {
  render() {
    const { type, deck, turn, playerScore, dealerScore, step } = this.props;
    return (
      <div>
        {type === "player" ? (
          <React.Fragment>
            <h3>{type}</h3>
            <h3>{playerScore}</h3>
            <PlayerDeck type={"player"} deck={deck} key={this.props.step} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3>{type}</h3>
            <h3>{dealerScore}</h3>
            <DealerDeck type={"dealer"} deck={deck} key={this.props.step} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  deck: state.deck.deck,
  step: state.step.step,
  turn: state.step.turn,
  playerScore: state.player.playerScore,
  dealerScore: state.dealer.dealerScore,
});

export default connect(mapStateToProps)(Player);
