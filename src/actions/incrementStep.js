import { INCREMENT_STEP } from "./types";

export const incrementStep = () => (dispatch) => {
  console.log("increment step");
  dispatch({
    type: INCREMENT_STEP,
  });
};
