import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffleDeck } from "../actions/shuffleDeck";
import { incrementStep } from "../actions/incrementStep";
import { turnPlayer } from "../actions/turnStep";
import { turnDealer } from "../actions/turnStep";
import { resetGame } from "../actions/resetGame";
import { resetPlayerScore } from "../actions/resetScores";
import { resetDealerScore } from "../actions/resetScores";
import { resetPlayerHand } from "../actions/resetHands";
import { resetDealerHand } from "../actions/resetHands";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableButton: false,
    };
  }
  shuffleDeck = (event) => {
    const { deck } = this.props;
    if (event.target.value === "shuffle") {
      this.props.shuffleDeck(deck);
      this.props.incrementStep();
    }
  };
  handleHit = (event) => {
    if (event.target.value === "hit") {
      this.props.incrementStep();
      this.props.turnPlayer();
    }
  };
  handleStay = (event) => {
    if (event.target.value === "stay") {
      this.setState({ disableButton: true });
      this.props.incrementStep();
      this.props.turnDealer();
    }
  };
  handleReset = (event) => {
    if (event.target.value === "reset") {
      const { deck } = this.props;
      // call the actions that resets the game
      this.props.shuffleDeck(deck);
      this.props.resetGame();
      this.props.resetPlayerScore();
      this.props.resetDealerScore();
      this.props.resetDealerHand();
      this.props.resetPlayerHand();
    }
  };
  render() {
    const { type, playerScore, dealerScore } = this.props;
    const { disableButton } = this.state;
    return (
      <React.Fragment>
        <input
          type="button"
          value={type}
          disabled={disableButton}
          onClick={
            type === "shuffle"
              ? this.shuffleDeck
              : type === "hit"
              ? this.handleHit
              : type === "stay"
              ? this.handleStay
              : type === "reset"
              ? this.handleReset
              : null
          }
          className="button"
        />
        {disableButton === true ? (
          <div>
            <h4>Your score is: {playerScore}</h4>
            <h4>Dealer score is: {dealerScore}</h4>
            {playerScore > dealerScore ? (
              <p>Congratulations you won !</p>
            ) : (
              <p>You lost, long live the dealer !</p>
            )}
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  deck: state.deck.deck,
  playerScore: state.player.playerScore,
  dealerScore: state.dealer.dealerScore,
  step: state.step.step,
  turn: state.step.turn,
});

export default connect(mapStateToProps, {
  shuffleDeck,
  incrementStep,
  turnPlayer,
  turnDealer,
  resetGame,
  resetDealerScore,
  resetPlayerScore,
  resetPlayerHand,
  resetDealerHand,
})(Button);
