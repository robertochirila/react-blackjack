import { INCREMENT_DEALER_SCORE } from "../actions/types";

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

    default:
      return state;
  }
}
