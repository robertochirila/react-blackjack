import { INCREMENT_PLAYER_SCORE } from "../actions/types";

// import function that shuffles the deck and returns it

const initialState = {
  playerScore: 0,
};

export default function (state = initialState, action) {
  //console.log(state.playerScore);
  //console.log(state.playerScore);
  switch (action.type) {
    case INCREMENT_PLAYER_SCORE:
      return {
        ...state,
        playerScore: state.playerScore + action.payload,
      };

    default:
      return state;
  }
}
