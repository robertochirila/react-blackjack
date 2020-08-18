import { RESET_GAME } from "../actions/types";

export const resetGame = () => (dispatch) => {
  dispatch({
    type: RESET_GAME,
  });
};
