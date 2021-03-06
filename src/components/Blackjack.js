import React, { Component } from "react";
import Board from "./Board";
import { connect } from "react-redux";
import { addDeck } from "../actions/addDeck";

//

class Blackjack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
  }
  componentDidMount() {
    const { step, type, flag } = this.props;

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
          cards.push({
            id: 13 * suitIndex + rankIndex + 1,
            rank: rank,
            suit: suit,
            points: points,
            isFaceUp: true,
          });
        });
      });

      this.props.addDeck(cards);
    }
  }

  render() {
    const { step, playerScore, dealerScore, gameOver } = this.props;
    return (
      <div>
        {playerScore < 22 && dealerScore < 22 && gameOver === false ? (
          <Board step={step} />
        ) : dealerScore > 22 ? (
          <Board step={step} winner="player" />
        ) : (
          <Board step={step} winner="dealer" />
        )}
        {playerScore === 21 ? (
          <Board step={step} winner="player" />
        ) : dealerScore === 21 ? (
          <Board step={step} winner="dealer" />
        ) : null}
        {/*playerScore < 22 && dealerScore < 22 && gameOver === true ? (
          playerScore > dealerScore ? (
            <Board step={step} winner="player" />
          ) : (
            <Board step={step} winner="dealer" />
          )
          ) : null*/}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  decks: state.deck.decks,
  step: state.step.step,
  flag: state.deck.flag,
  playerScore: state.player.playerScore,
  dealerScore: state.dealer.dealerScore,
  gameOver: state.step.gameOver,
});

export default connect(mapStateToProps, { addDeck })(Blackjack);
