import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { incrementPlayerScore } from "../actions/incrementPlayerScore";

class PlayerDeck extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.deck === nextProps.deck) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    const { deck, type, step, flag } = this.props;
    let minIndex = 0;
    console.count("how many times player deck is rendered");

    if (step > 0) {
      let maxIndex = deck.length - 1;
      let firstNewCardIndex =
        Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
      let secondNewCardIndex =
        Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
      console.log(firstNewCardIndex, secondNewCardIndex);

      this.props.incrementPlayerScore(deck[firstNewCardIndex].points);
      this.props.incrementPlayerScore(deck[secondNewCardIndex].points);

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

export default connect(mapStateToProps, { incrementPlayerScore })(PlayerDeck);
