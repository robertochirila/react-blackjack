import { ADD_HAND } from "./types";
import { ADD_HAND_DEALER } from "./types";

export const addHand = (hand) => (dispatch) => {
  dispatch({
    type: ADD_HAND,
    payload: hand,
  });
};

export const addHandDealer = (hand) => (dispatch) => {
  dispatch({
    type: ADD_HAND_DEALER,
    payload: hand,
  });
};
