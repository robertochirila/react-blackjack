import { TURN_STEP_DEALER } from "../actions/types";
import { TURN_STEP_PLAYER } from "../actions/types";

export const turnPlayer = () => (dispatch) => {
  dispatch({
    type: TURN_STEP_PLAYER,
  });
};

export const turnDealer = () => (dispatch) => {
  dispatch({
    type: TURN_STEP_DEALER,
  });
};
