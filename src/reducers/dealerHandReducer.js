import { ADD_HAND_DEALER } from "../actions/types";
import { ADD_CARD_DEALER } from "../actions/types";
import { RESET_DEALER_HAND } from "../actions/types";

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
    case RESET_DEALER_HAND:
      return {
        ...state,
        dealerHand: [],
      };

    default:
      return state;
  }
}
