import { INCREMENT_DEALER_SCORE } from "./types";

export const incrementDealerScore = (points) => (dispatch) => {
  dispatch({
    type: INCREMENT_DEALER_SCORE,
    payload: points,
  });
};
