import { SHUFFLE_DECK } from "../actions/types";
import { ADD_DECK } from "../actions/types";

const initialState = {
  deck: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHUFFLE_DECK:
      return {
        ...state,
        deck: action.payload,
      };
    case ADD_DECK:
      console.log(action.payload);
      return {
        ...state,
        deck: [...state.deck, action.payload],
      };
    default:
      return state;
  }
}
