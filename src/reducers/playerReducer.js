import { INCREMENT_PLAYER_SCORE } from "../actions/types";

const initialState = {
  playerScore: 0,
};

export default function (state = initialState, action) {
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
