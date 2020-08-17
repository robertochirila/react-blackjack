import { INCREMENT_STEP } from "./types";

export const incrementStep = () => (dispatch) => {
  dispatch({
    type: INCREMENT_STEP,
  });
};
