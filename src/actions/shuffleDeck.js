import { SHUFFLE_DECK } from "./types";

export const shuffleDeck = () => (dispatch) => {
  dispatch({
    type: SHUFFLE_DECK,
    payload: "abc",
  });
};
