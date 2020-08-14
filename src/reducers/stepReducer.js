import { INCREMENT_STEP } from "../actions/types";
import { TURN_STEP_DEALER } from "../actions/types";
import { TURN_STEP_PLAYER } from "../actions/types";

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
      console.log("turn step dealer");
      return {
        ...state,
        turn: 1,
      };
    case TURN_STEP_PLAYER:
      console.log("turn step player");
      return {
        ...state,
        turn: 0,
      };

    default:
      return state;
  }
}
