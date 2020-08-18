import { RESET_PLAYER_HAND } from "../actions/types";
import { RESET_DEALER_HAND } from "../actions/types";

export const resetDealerHand = () => (dispatch) => {
  dispatch({
    type: RESET_PLAYER_HAND,
  });
};
export const resetPlayerHand = () => (dispatch) => {
  dispatch({
    type: RESET_DEALER_HAND,
  });
};
