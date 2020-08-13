import React, { Component } from "react";
import Player from "./Player";
import Button from "./Button";
import { connect } from "react-redux";

// when this component is mounted dispatch action to the reducer
// to shuffle both decks of cards
// render the button component with the correct props

class Board extends Component {
  componentDidMount() {
    console.count("counter");
    // HERE
  }
  render() {
    const { step, deck } = this.props;
    return (
      <div className="wrapper">
        <div className="board">
          {step === 0 ? (
            <React.Fragment>
              <Button type={"shuffle"} />
              {/*<Player type={"player"} key={0} />
              <Player type={"dealer"} key={1} />*/}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button type={"hit"} />
              <Button type={"stay"} />
              <div className="grid">
                <div className="row">
                  <div className="col-2">
                    <Player type={"player"} deck={deck} key={2} />
                  </div>
                  <div className="col-2">
                    <Player type={"dealer"} deck={deck} key={3} />
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
  deck: state.deck.deck,
  step: state.step.step,
  // here I need two arrays containing two deck objects
});

export default connect(mapStateToProps)(Board);
