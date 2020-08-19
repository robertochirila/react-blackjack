import React, { Component } from "react";
import { connect } from "react-redux";
import Hand from "./Hand";
import { incrementPlayerScore } from "../actions/incrementPlayerScore";
import { addCardToHand } from "../actions/addCardToHand";

class PlayerDeck extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.deck === nextProps.deck) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    const { deck, type, step, turn } = this.props;
    let minIndex = 0;
    if (step === 1) {
      let maxIndex = deck.length - 1;
      let firstNewCardIndex =
        Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
      let secondNewCardIndex =
        Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
      this.props.incrementPlayerScore(deck[firstNewCardIndex].points);
      this.props.incrementPlayerScore(deck[secondNewCardIndex].points);
      let deckOfCards = [];
      deckOfCards.push({ index: firstNewCardIndex, type: { type } });
      deckOfCards.push({ index: secondNewCardIndex, type: { type } });
      return (
        <div class="hand">
          <Hand deckOfCards={deckOfCards} />
        </div>
      );
    } else if (step > 1 && turn === 0) {
      let maxIndex = deck.length - 1;
      let firstNewCardIndex =
        Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
      this.props.incrementPlayerScore(deck[firstNewCardIndex].points);
      let deckOfCards = [];
      deckOfCards.push({ index: firstNewCardIndex, type: { type } });
      this.props.addCardToHand(deckOfCards);
      return (
        <div class="hand">
          <Hand deckOfCards={deckOfCards} />
        </div>
      );
      // create new card and call action to update hand
    }
    if (turn === 1) {
      return (
        <div class="hand">
          <Hand />
        </div>
      );
    }
    return <div>{step > 0 ? <div></div> : null}</div>;
  }
}

const mapStateToProps = (state) => ({
  deck: state.deck.deck,
  hand: state.hand.hand,
  step: state.step.step,
  flag: state.deck.flag,
  turn: state.step.turn,
});

export default connect(mapStateToProps, {
  incrementPlayerScore,
  addCardToHand,
})(PlayerDeck);
