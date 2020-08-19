import React, { Component } from "react";
import Card from "./Card";
import { addHand } from "../actions/addHand";
import { connect } from "react-redux";

class Hand extends Component {
  componentDidMount() {
    const { deckOfCards, step } = this.props;
    if (step === 1) {
      this.props.addHand(deckOfCards);
    }
  }
  render() {
    const { deckOfCards, step, hand } = this.props;
    var renderCards;
    if (step === 1) {
      renderCards = deckOfCards.map((card, index) => {
        return <Card index={card.index} type={card.type} key={index} />;
      });
    } else if (step > 1) {
      return hand.map((entries, index) => {
        return entries.map((card, index) => {
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
  hand: state.hand.hand,
});

export default connect(mapStateToProps, { addHand })(Hand);
