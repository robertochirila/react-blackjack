import { HIT } from "./types";

export const hit = (points) => (dispatch) => {
  console.log(points);
  dispatch({
    type: HIT,
    payload: points,
  });
};
