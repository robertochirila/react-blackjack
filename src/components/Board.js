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
    const { step, decks } = this.props;
    return (
      <div className="wrapper">
        <div className="board">
          {step === 0 ? (
            <React.Fragment>
              <Button type={"shuffle"} />
              <Player type={"player"} />
              <Player type={"dealer"} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button type={"hit"} />
              <Button type={"stay"} />
              <div className="grid">
                <div className="row">
                  <div className="col-2">
                    <Player type={"player"} deck={decks[0]} />
                  </div>
                  <div className="col-2">
                    <Player type={"dealer"} deck={decks[1]} />
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  decks: state.deck.decks,
  step: state.step.step,
  // here I need two arrays containing two deck objects
});

export default connect(mapStateToProps)(Board);
