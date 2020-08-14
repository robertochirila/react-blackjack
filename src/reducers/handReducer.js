import { ADD_HAND } from "../actions/types";
import { ADD_CARD } from "../actions/types";

const initialState = {
  hand: [],
};

export default function (state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case ADD_HAND:
      return {
        ...state,
        hand: [...state.hand, action.payload],
      };
    case ADD_CARD:
      console.log(state.hand, action.payload);
      return {
        ...state,
        hand: [...state.hand, action.payload],
      };

    default:
      return state;
  }
}
