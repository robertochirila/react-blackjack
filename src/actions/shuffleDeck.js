import { SHUFFLE_DECK } from "./types";

export const shuffleDeck = (deck) => (dispatch) => {
  dispatch({
    type: SHUFFLE_DECK,
    payload: deck,
  });
};
