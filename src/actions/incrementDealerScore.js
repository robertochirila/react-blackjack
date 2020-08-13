import { INCREMENT_DEALER_SCORE } from "./types";

export const incrementDealerScore = (val1, val2) => (dispatch) => {
  console.log("increment dealer score");
  dispatch({
    type: INCREMENT_DEALER_SCORE,
  });
};
