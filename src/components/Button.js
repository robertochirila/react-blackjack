import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffleDeck } from "../actions/shuffleDeck";
import { incrementStep } from "../actions/incrementStep";
import hit from "../actions/hit";

// the button component that receives props from the board component
// this component will be connected to the store and will dispatch actions to the store

class Button extends Component {
  shuffleDeck = () => {
    const { deck, step } = this.props;
    this.props.shuffleDeck(deck);
    this.props.incrementStep();
  };
  handleHit = () => {
    console.log("hereeeeeeeeee");
    this.props.incrementStep();
  };
  handleStay = () => {
    console.log("hereeeeeeeeee");
    this.props.incrementStep();
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
  deck: state.deck.deck,
  step: state.step.step,
});

export default connect(mapStateToProps, {
  shuffleDeck,
  incrementStep,
})(Button);
