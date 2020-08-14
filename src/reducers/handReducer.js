import { ADD_HAND } from "../actions/types";
import { ADD_CARD } from "../actions/types";

// import function that shuffles the deck and returns it

const initialState = {
  hand: [],
};

export default function (state = initialState, action) {
  //console.log(state.playerScore);
  //console.log(state.playerScore);
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
