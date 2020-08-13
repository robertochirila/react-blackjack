import { INCREMENT_PLAYER_SCORE } from "./types";

export const incrementPlayerScore = () => (dispatch) => {
  console.log("increment step");
  dispatch({
    type: INCREMENT_PLAYER_SCORE,
  });
};
