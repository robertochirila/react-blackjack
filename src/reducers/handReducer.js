import { ADD_HAND } from "../actions/types";
import { ADD_CARD } from "../actions/types";
import { RESET_PLAYER_HAND } from "../actions/types";

const initialState = {
  hand: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_HAND:
      return {
        ...state,
        hand: [...state.hand, action.payload],
      };
    case ADD_CARD:
      return {
        ...state,
        hand: [...state.hand, action.payload],
      };
    case RESET_PLAYER_HAND:
      return {
        ...state,
        hand: [],
      };

    default:
      return state;
  }
}
