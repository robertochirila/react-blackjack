import { ADD_DECK } from "./types";

export const addDeck = (deck) => (dispatch) => {
  dispatch({
    type: ADD_DECK,
    payload: deck,
  });
};
