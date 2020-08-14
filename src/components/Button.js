import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffleDeck } from "../actions/shuffleDeck";
import { incrementStep } from "../actions/incrementStep";
import hit from "../actions/hit";

// the button component that receives props from the board component
// this component will be connected to the store and will dispatch actions to the store

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableButton: false,
    };
  }
  shuffleDeck = (event) => {
    const { deck, step } = this.props;
    if (event.target.value === "shuffle") {
      this.props.shuffleDeck(deck);
      this.props.incrementStep();
    }
  };
  handleHit = (event) => {
    console.log("hereeeeeeeeee");
    if (event.target.value === "hit") {
      this.props.incrementStep();
    }
  };
  handleStay = (event) => {
    console.log("hereeeeeeeeee");
    if (event.target.value === "stay") {
      this.setState({ disableButton: true });
    }

    //this.props.incrementStep();
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
});

export default connect(mapStateToProps, {
  shuffleDeck,
  incrementStep,
})(Button);
