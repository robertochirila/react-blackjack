import React, { Component } from "react";
import { connect } from "react-redux";
import { addDeck } from "../actions/addDeck";
import Card from "./Card";

class Deck extends Component {
  componentDidMount() {
    console.count("how many times");
  }
  /*componentDidMount() {
    const { step, type, flag } = this.props;
    console.log(type, flag);
    console.count("how many times");

    if (step === 0) {
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

      this.props.addDeck(cards);
    }
  }*/
  render() {
    const { step, deck, type } = this.props;
    let minIndex = 0;
    if (step > 0) {
      console.log(type);

      if (type === "player") {
        let maxIndex = deck.length - 1;
        let firstNewCardIndex =
          Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
        let secondNewCardIndex =
          Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
        console.log(firstNewCardIndex, secondNewCardIndex);
        return (
          <React.Fragment>
            <Card index={firstNewCardIndex} type={type} />
            <Card index={secondNewCardIndex} type={type} />
          </React.Fragment>
        );
      }
    }

    return <div>{step > 0 ? <div></div> : null}</div>;
  }
}

const mapStateToProps = (state) => ({
  decks: state.deck.decks,
  step: state.step.step,
  flag: state.deck.flag,
});

export default connect(mapStateToProps, { addDeck })(Deck);
