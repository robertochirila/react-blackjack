import React, { Component } from "react";
import Player from "./Player";
import Button from "./Button";
import { connect } from "react-redux";

// when this component is mounted dispatch action to the reducer
// to shuffle both decks of cards
// render the button component with the correct props

class Board extends Component {
  componentDidMount() {
    // HERE
  }
  render() {
    const { step } = this.props;
    return (
      <div className="wrapper">
        <div className="board">
          {step === 0 ? (
            <React.Fragment>
              <Player type={"player"} />
              <Player type={"dealer"} />
              <Button type={"shuffle"} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Player type={"player"} />
              <Player type={"dealer"} />
              <Button type={"hit"} />
              <Button type={"stay"} />
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  step: state.step.step,
  // here I need two arrays containing two deck objects
});

export default connect(mapStateToProps)(Board);
