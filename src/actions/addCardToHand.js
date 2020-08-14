import { ADD_CARD } from "./types";

export const addCardToHand = (card) => (dispatch) => {
  console.log(card);
  dispatch({
    type: ADD_CARD,
    payload: card,
  });
};
