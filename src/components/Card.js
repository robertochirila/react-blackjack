import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementPlayerScore } from "../actions/incrementPlayerScore";
import { incrementDealerScore } from "../actions/incrementDealerScore";

class Card extends Component {
  render() {
    const { index, deck, type, turn, nr } = this.props;
    var card, cardPoints;
    card = deck[index];
    if (type === "player") {
      cardPoints = card.points;
    } else if (type === "dealer") {
      cardPoints = card.points;
    }
    return (
      <div
        className={
          type.type === "dealer" && nr === 2 ? "card--unknown" : "card"
        }
      >
        <div className="card--row">
          <div className="col-2">
            <p className="card--rank" id="left">
              {card.rank}
            </p>
          </div>
          <div className="col-2">
            <p className="card--rank" id="right">
              {card.rank}
            </p>
          </div>
        </div>
        <div className="card--row">
          <div className="col-2">
            <p className="card--rank" id="bottomLeft">
              {card.rank}
            </p>
          </div>
          <div className="col-2">
            <p className="card--rank" id="bottomRight">
              {card.rank}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  deck: state.deck.deck,
  step: state.step.step,
  turn: state.step.turn,
});

export default connect(mapStateToProps, {
  incrementDealerScore,
  incrementPlayerScore,
})(Card);
