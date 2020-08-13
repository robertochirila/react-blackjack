import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementPlayerScore } from "../actions/incrementPlayerScore";
import { incrementDealerScore } from "../actions/incrementDealerScore";

class Card extends Component {
  render() {
    const { index, decks, type } = this.props;
    var card, cardPoints, localDeck;

    if (type === "player") {
      localDeck = [...decks[0]];
      card = localDeck[index];
      console.log(index);
      console.log(card);
      cardPoints = card.points;
      console.log(cardPoints);
      this.props.incrementPlayerScore(cardPoints);
    } else if (type === "dealer") {
      localDeck = decks[1];
      card = localDeck[index];
      cardPoints = card.points;
      console.log(cardPoints);
      //this.props.incrementDealerScore(cardPoints);
    }
    //console.log(type);
    return (
      <div className="card">
        <p>{card.rank}</p>
        <p>{cardPoints}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  decks: state.deck.decks,
});

export default connect(mapStateToProps, {
  incrementDealerScore,
  incrementPlayerScore,
})(Card);
