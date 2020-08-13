import { SHUFFLE_DECKS } from "./types";

export const shuffleDecks = (decks) => (dispatch) => {
  console.log("shuffle deck", decks);
  dispatch({
    type: SHUFFLE_DECKS,
    payload: decks,
  });
};
