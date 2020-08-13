import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffleDecks } from "../actions/shuffleDecks";
import { incrementStep } from "../actions/incrementStep";

// the button component that receives props from the board component
// this component will be connected to the store and will dispatch actions to the store

class Button extends Component {
  shuffleDeck = () => {
    const { decks, step } = this.props;
    this.props.shuffleDecks(decks);
    this.props.incrementStep();
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
});

export default connect(mapStateToProps, { shuffleDecks, incrementStep })(
  Button
);
