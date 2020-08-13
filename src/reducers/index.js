import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import deckReducer from "./deckReducer";

export default combineReducers({
  player: playerReducer,
  deck: deckReducer,
});
