import { ADD_DECK } from "./types";

export const addDeck = (deck) => (dispatch) => {
  //console.count("how many times");
  console.log("here");
  dispatch({
    type: ADD_DECK,
    payload: deck,
  });
};
