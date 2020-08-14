import { ADD_HAND } from "./types";

export const addHand = (hand) => (dispatch) => {
  console.log(hand);
  dispatch({
    type: ADD_HAND,
    payload: hand,
  });
};
