import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementPlayerScore } from "../actions/incrementPlayerScore";
import { incrementDealerScore } from "../actions/incrementDealerScore";

class Card extends Component {
  render() {
    const { index, deck, type } = this.props;
    var card, cardPoints, localDeck;
    //console.count("how many times");
    card = deck[index];
    console.log(card);
    if (type === "player") {
      cardPoints = card.points;
      //this.props.incrementPlayerScore(cardPoints);
    } else if (type === "dealer") {
      cardPoints = card.points;
      //this.props.incrementDealerScore(cardPoints);
    }

    /*if (type === "player") {
      localDeck = deck;
      card = localDeck[index];
      console.log(index);
      console.log(card);
      cardPoints = card.points;
      console.log(cardPoints);
      this.props.incrementPlayerScore(cardPoints);
    } /*else if (type === "dealer") {
      localDeck = decks[1];
      card = localDeck[index];
      cardPoints = card.points;
      console.log(cardPoints);
      //this.props.incrementDealerScore(cardPoints);
    }*/
    //console.log(type);
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
