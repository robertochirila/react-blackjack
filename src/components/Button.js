import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffleDecks } from "../actions/shuffleDecks";
import { incrementStep } from "../actions/incrementStep";

// the button component that receives props from the board component
// this component will be connected to the store and will dispatch actions to the store

class Button extends Component {
  componentDidMount() {
    console.log("Button component rendered");
    console.log(this.props);
  }
  shuffleDeck = () => {
    const { decks, step } = this.props;
    console.log("shuffle deck event");
    this.props.shuffleDecks(decks);
    this.props.incrementStep();
    // dispatch the action
  };
  handleHit = () => {
    console.log("handle hit event");
  };
  handleStay = () => {
    console.log("handle stay");
  };
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
  // here I need two arrays containing two deck objects
});

export default connect(mapStateToProps, { shuffleDecks, incrementStep })(
  Button
);
