import React, { Component } from "react";
import Player from "./Player";
import Button from "./Button";
import { connect } from "react-redux";

class Board extends Component {
  render() {
    const { step, deck, winner } = this.props;
    return (
      <div className="wrapper">
        <div className="board">
          {step === 0 ? (
            <React.Fragment>
              <Button type={"shuffle"} />
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
              {winner === "dealer" ? (
                <div>
                  <Button type="reset" />
                </div>
              ) : winner === "player" ? (
                <div>
                  <Button type="reset" />
                </div>
              ) : null}
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
