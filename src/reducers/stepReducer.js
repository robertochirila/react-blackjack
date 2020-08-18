import { INCREMENT_STEP } from "../actions/types";
import { TURN_STEP_DEALER } from "../actions/types";
import { TURN_STEP_PLAYER } from "../actions/types";
import { RESET_GAME } from "../actions/types";

const initialState = {
  step: 0,
  turn: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT_STEP:
      return {
        ...state,
        step: state.step + 1,
      };
    case TURN_STEP_DEALER:
      return {
        ...state,
        turn: 1,
      };
    case TURN_STEP_PLAYER:
      return {
        ...state,
        turn: 0,
      };
    case RESET_GAME:
      return {
        ...state,
        step: 0,
        turn: 1,
      };

    default:
      return state;
  }
}
