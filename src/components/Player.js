import React, { Component } from "react";
import PlayerDeck from "./PlayerDeck";
import DealerDeck from "./DealerDeck";
import { connect } from "react-redux";

// the component will receive props from the blackjack component either dealer or player
// this will hold values regarding score and turn

class Player extends Component {
  render() {
    const { type, deck, step } = this.props;

    //console.log(type, step);
    console.count("how many times is Player rendered");
    return (
      <div>
        {type === "player" ? (
          <React.Fragment>
            <h3>{type}</h3>
            <h4>{step}</h4>
            <PlayerDeck
              type={"player"}
              type={"player"}
              deck={deck}
              key={this.props.step}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3>{type}</h3>
            <DealerDeck type={"dealer"} type={"dealer"} deck={deck} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  deck: state.deck.deck,
  step: state.step.step,
});

export default connect(mapStateToProps)(Player);
