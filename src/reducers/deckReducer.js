import { SHUFFLE_DECK } from "../actions/types";

const initialState = {
  step: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHUFFLE_DECK:
      return {
        ...state,
        deck: action.payload,
      };
    default:
      return state;
  }
}
