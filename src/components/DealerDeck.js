import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { incrementDealerScore } from "../actions/incrementDealerScore";

class DealerDeck extends Component {
  render() {
    const { deck, type, step } = this.props;
    let minIndex = 0;

    if (step > 0) {
      let maxIndex = deck.length - 1;
      let firstNewCardIndex =
        Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
      let secondNewCardIndex =
        Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
      this.props.incrementDealerScore(deck[firstNewCardIndex].points);
      this.props.incrementDealerScore(deck[secondNewCardIndex].points);
      return (
        <div>
          <Card index={firstNewCardIndex} type={type} />
          <Card index={secondNewCardIndex} type={type} />
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
});

export default connect(mapStateToProps, { incrementDealerScore })(DealerDeck);
