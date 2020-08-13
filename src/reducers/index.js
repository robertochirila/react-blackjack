import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import deckReducer from "./deckReducer";
import stepReducer from "./stepReducer";
import dealerReducer from "./dealerReducer";

export default combineReducers({
  player: playerReducer,
  dealer: dealerReducer,
  deck: deckReducer,
  step: stepReducer,
});
