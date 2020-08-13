import { INCREMENT_STEP } from "../actions/types";

// import function that shuffles the deck and returns it

const initialState = {
  step: 0,
};

export default function (state = initialState, action) {
  console.log("here");
  switch (action.type) {
    case INCREMENT_STEP:
      return {
        ...state,
        step: state.step + 1,
      };

    default:
      return state;
  }
}
