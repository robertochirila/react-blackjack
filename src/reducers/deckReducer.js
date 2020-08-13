import { SHUFFLE_DECKS } from "../actions/types";
import { ADD_DECK } from "../actions/types";
import { shuffle } from "../utils/shuffle";

// import function that shuffles the deck and returns it

const initialState = {
  decks: [],
  flag: true,
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
      console.log(state.flag);
      return {
        ...state,
        decks: [...state.decks, action.payload],
        flag: !state.flag,
      };

    default:
      return state;
  }
}
