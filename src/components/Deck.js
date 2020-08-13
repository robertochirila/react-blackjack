import React, { Component } from "react";
import { connect } from "react-redux";
import { addDeck } from "../actions/addDeck";

// this component will contain two arrays of card objects one for the player one for the dealer

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckOfCards: [],
    };
  }
  componentDidMount() {
    let cards = [];
    let suits = ["C", "D", "H", "S"];
    let ranks = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];

    suits.map(function (suit, suitIndex) {
      ranks.map(function (rank, rankIndex) {
        let points = rankIndex < 10 ? rankIndex + 1 : 10;
        //let backgroundX = -rankIndex * 79;
        //let backgroundY = -suitIndex * 123;
        cards.push({
          id: 13 * suitIndex + rankIndex + 1,
          rank: rank,
          suit: suit,
          points: points,
          //backgroundPosition: backgroundX + "px " + backgroundY + "px",
          isFaceUp: true,
        });
      });
    });
    this.setState({ deckOfCards: cards });
    this.props.addDeck(cards);
    // dispatch action that adds the deck of card to an array
  }
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  deck: state.deck.deck,
});

export default connect(mapStateToProps, { addDeck })(Deck);
