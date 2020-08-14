import { ADD_HAND_DEALER } from "../actions/types";
import { ADD_CARD_DEALER } from "../actions/types";

const initialState = {
  dealerHand: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_HAND_DEALER:
      return {
        ...state,
        dealerHand: [...state.dealerHand, action.payload],
      };
    case ADD_CARD_DEALER:
      return {
        ...state,
        dealerHand: [...state.dealerHand, action.payload],
      };

    default:
      return state;
  }
}
