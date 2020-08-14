import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { incrementDealerScore } from "../actions/incrementDealerScore";
import DealerHand from "./DealerHand";
import { addCardToHand } from "../actions/addCardToHand";

class DealerDeck extends Component {
  render() {
    const { deck, type, step, turn } = this.props;
    let minIndex = 0;
    if (step === 1) {
      let maxIndex = deck.length - 1;
      let firstNewCardIndex =
        Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
      let secondNewCardIndex =
        Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
      this.props.incrementDealerScore(deck[firstNewCardIndex].points);
      this.props.incrementDealerScore(deck[secondNewCardIndex].points);
      let deckOfCards = [];
      deckOfCards.push({ index: firstNewCardIndex, type: { type } });
      deckOfCards.push({ index: secondNewCardIndex, type: { type } });
      return (
        <div>
          <DealerHand deckOfCards={deckOfCards} />
        </div>
      );
    } else if (step > 1 && turn === 1) {
      let maxIndex = deck.length - 1;
      let firstNewCardIndex =
        Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
      this.props.incrementDealerScore(deck[firstNewCardIndex].points);
      let deckOfCards = [];
      deckOfCards.push({ index: firstNewCardIndex, type: { type } });
      this.props.addCardToHand(deckOfCards);
      return (
        <div>
          <DealerHand deckOfCards={deckOfCards} />
        </div>
      );
    }
    return <div>{step > 0 ? <div></div> : null}</div>;
  }
}

const mapStateToProps = (state) => ({
  deck: state.deck.deck,
  step: state.step.step,
  flag: state.deck.flag,
  turn: state.step.turn,
});

export default connect(mapStateToProps, {
  incrementDealerScore,
  addCardToHand,
})(DealerDeck);
