import React, { Component } from "react";
import { connect } from "react-redux";

class Card extends Component {
  render() {
    const { index, decks } = this.props;
    const localDeck = decks[0];
    let card = localDeck[index];
    console.log(card);
    return (
      <div className="card">
        <p>{card.rank}</p>
        <p>{card.points}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  decks: state.deck.decks,
});

export default connect(mapStateToProps)(Card);
