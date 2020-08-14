import React, { Component } from "react";
import { connect } from "react-redux";
import { addDeck } from "../actions/addDeck";
import Card from "./Card";

class Deck extends Component {
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
  deck: state.deck.deck,
  step: state.step.step,
  flag: state.deck.flag,
});

export default connect(mapStateToProps, { addDeck })(Deck);
