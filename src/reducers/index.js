import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import deckReducer from "./deckReducer";
import stepReducer from "./stepReducer";

export default combineReducers({
  player: playerReducer,
  deck: deckReducer,
  step: stepReducer,
});
