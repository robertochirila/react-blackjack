import { ADD_DECK } from "./types";

export const addDeck = (deck) => (dispatch) => {
  console.log("Add deck action");
  dispatch({
    type: ADD_DECK,
    payload: deck,
  });
};
