import React, { Component } from "react";
import { connect } from "react-redux";
import { shuffleDeck } from "../actions/shuffleDeck";

// the button component that receives props from the board component
// this component will be connected to the store and will dispatch actions to the store

class Button extends Component {
  componentDidMount() {
    console.log("Button component rendered");
    console.log(this.props);
  }
  shuffleDeck = () => {
    const { decks } = this.props;
    console.log("shuffle deck event");
    this.props.shuffleDeck();
    // dispatch the action
  };
  handleHit = () => {
    console.log("handle hit event");
  };
  handleStay = () => {
    console.log("handle stay");
  };
  render() {
    const { type } = this.props;
    return (
      <React.Fragment>
        <input
          type="button"
          value={type}
          onClick={type === "shuffle" ? this.shuffleDeck : this.handleHit}
          className="button"
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  deck: state.deck.deck,
});

export default connect(mapStateToProps, { shuffleDeck })(Button);
