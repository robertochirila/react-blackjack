import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementPlayerScore } from "../actions/incrementPlayerScore";
import { incrementDealerScore } from "../actions/incrementDealerScore";

class Card extends Component {
  render() {
    const { index, deck, type } = this.props;
    var card, cardPoints, localDeck;
    card = deck[index];
    if (type === "player") {
      cardPoints = card.points;
    } else if (type === "dealer") {
      cardPoints = card.points;
    }
    return (
      <div className="card">
        <p>{card.rank}</p>
        <p>{card.points}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  deck: state.deck.deck,
});

export default connect(mapStateToProps, {
  incrementDealerScore,
  incrementPlayerScore,
})(Card);
