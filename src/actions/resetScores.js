import { RESET_PLAYER_SCORE } from "../actions/types";
import { RESET_DEALER_SCORE } from "../actions/types";

export const resetDealerScore = () => (dispatch) => {
  dispatch({
    type: RESET_PLAYER_SCORE,
  });
};
export const resetPlayerScore = () => (dispatch) => {
  dispatch({
    type: RESET_DEALER_SCORE,
  });
};
