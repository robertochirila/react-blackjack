import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffleDecks } from "../actions/shuffleDecks";
import { incrementStep } from "../actions/incrementStep";
import { incrementPlayerScore } from "../actions/incrementPlayerScore";
import { incrementDealerScore } from "../actions/incrementDealerScore";

// the button component that receives props from the board component
// this component will be connected to the store and will dispatch actions to the store

class Button extends Component {
  shuffleDeck = () => {
    const { decks, step } = this.props;
    console.log(decks.length);

    this.props.shuffleDecks(decks);

    this.props.incrementStep();
    this.props.incrementDealerScore();
    this.props.incrementPlayerScore();
  };
  handleHit = () => {};
  handleStay = () => {};
  render() {
    const { type } = this.props;
    return (
      <React.Fragment>
        <input
          type="button"
          value={type}
          onClick={
            type === "shuffle"
              ? this.shuffleDeck
              : this.handleHit || type === "stay"
              ? this.handleStay
              : null
          }
          className="button"
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  decks: state.deck.decks,
  step: state.step.step,
  playerScore: state.player.playerReducer,
  dealerScore: state.dealer.dealerReducer,
});

export default connect(mapStateToProps, {
  shuffleDecks,
  incrementStep,
  incrementDealerScore,
  incrementPlayerScore,
})(Button);
