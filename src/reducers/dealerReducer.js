import { INCREMENT_DEALER_SCORE } from "../actions/types";
import { RESET_DEALER_SCORE } from "../actions/types";

const initialState = {
  dealerScore: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT_DEALER_SCORE:
      return {
        ...state,
        dealerScore: state.dealerScore + action.payload,
      };
    case RESET_DEALER_SCORE:
      return {
        ...state,
        dealerScore: 0,
      };

    default:
      return state;
  }
}
