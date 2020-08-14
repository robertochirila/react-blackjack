import { SHUFFLE_DECK } from "../actions/types";
import { ADD_DECK } from "../actions/types";
import { shuffle } from "../utils/shuffle";

// import function that shuffles the deck and returns it

const initialState = {
  deck: [],
  flag: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHUFFLE_DECK:
      shuffle(action.payload);
      return {
        ...state,
        deck: action.payload,
      };
    case ADD_DECK:
      return {
        ...state,
        deck: action.payload,
        flag: !state.flag,
      };

    default:
      return state;
  }
}
