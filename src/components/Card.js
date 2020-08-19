import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementPlayerScore } from "../actions/incrementPlayerScore";
import { incrementDealerScore } from "../actions/incrementDealerScore";

class Card extends Component {
  render() {
    const { index, deck, type, step } = this.props;
    var card, cardPoints;
    card = deck[index];
    if (type === "player") {
      cardPoints = card.points;
    } else if (type === "dealer") {
      cardPoints = card.points;
    }
    return (
      <div className={type.type === "dealer" ? "card--unknown" : "card"}>
        <p>{card.rank}</p>
        <p className="card--points">{card.points}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  deck: state.deck.deck,
  step: state.step.step,
});

export default connect(mapStateToProps, {
  incrementDealerScore,
  incrementPlayerScore,
})(Card);
