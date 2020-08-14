import React, { Component } from "react";
import Card from "./Card";
import { addHandDealer } from "../actions/addHand";
import { connect } from "react-redux";
import { shuffleDeck } from "../actions/shuffleDeck";

class DealerHand extends Component {
  componentDidMount() {
    const { deckOfCards, step } = this.props;
    if (step === 1) {
      console.log(deckOfCards);
      this.props.addHandDealer(deckOfCards);
    }
  }
  render() {
    const { deckOfCards, step, dealerHand } = this.props;
    var renderCards;
    if (step === 1) {
      renderCards = deckOfCards.map((card, index) => {
        return <Card index={card.index} type={card.type} key={index} />;
      });
    } else if (step > 1) {
      return dealerHand.map((entries, index) => {
        return entries.map((card, index) => {
          console.log(card);
          return <Card index={card.index} type={card.type} key={index} />;
        });
      });
    }

    return <div>{renderCards}</div>;
  }
}

const mapStateToProps = (state) => ({
  deck: state.deck.deck,
  step: state.step.step,
  flag: state.deck.flag,
  dealerHand: state.dealerHand.dealerHand,
});

export default connect(mapStateToProps, { addHandDealer })(DealerHand);
