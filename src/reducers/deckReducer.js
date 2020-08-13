import { SHUFFLE_DECKS } from "../actions/types";
import { ADD_DECK } from "../actions/types";
import { shuffle } from "../utils/shuffle";

// import function that shuffles the deck and returns it

const initialState = {
  decks: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHUFFLE_DECKS:
      shuffle(action.payload);
      return {
        ...state,
        deck: action.payload,
      };
    case ADD_DECK:
      if (state.decks.length < 2) {
        return {
          ...state,
          decks: [...state.decks, action.payload],
        };
      }

    default:
      return state;
  }
}
