import { INCREMENT_PLAYER_SCORE } from "../actions/types";
import { RESET_PLAYER_SCORE } from "../actions/types";

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
    case RESET_PLAYER_SCORE:
      return {
        ...state,
        playerScore: 0,
      };

    default:
      return state;
  }
}
