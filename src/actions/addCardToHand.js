import { ADD_CARD } from "./types";

export const addCardToHand = (card) => (dispatch) => {
  dispatch({
    type: ADD_CARD,
    payload: card,
  });
};
