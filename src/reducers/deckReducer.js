import { SHUFFLE_DECK } from "../actions/types";
import { ADD_DECK } from "../actions/types";

// import function that shuffles the deck and returns it

const initialState = {
  decks: [],
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
        decks: [...state.decks, action.payload],
      };
    default:
      return state;
  }
}
