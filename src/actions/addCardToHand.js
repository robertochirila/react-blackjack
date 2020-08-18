import { ADD_CARD } from "./types";
import { ADD_CARD_DEALER } from "./types";

export const addCardToHand = (card) => (dispatch) => {
  let player = card[0].type.type;
  if (player === "player") {
    dispatch({
      type: ADD_CARD,
      payload: card,
    });
  } else if (player === "dealer") {
    dispatch({
      type: ADD_CARD_DEALER,
      payload: card,
    });
  }
};
