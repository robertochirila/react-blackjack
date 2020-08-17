import { INCREMENT_PLAYER_SCORE } from "./types";

export const incrementPlayerScore = (points) => (dispatch) => {
  dispatch({
    type: INCREMENT_PLAYER_SCORE,
    payload: points,
  });
};
