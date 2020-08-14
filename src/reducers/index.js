import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import deckReducer from "./deckReducer";
import stepReducer from "./stepReducer";
import dealerReducer from "./dealerReducer";
import handReducer from "./handReducer";
import dealerHandReducer from "./dealerHandReducer";

export default combineReducers({
  player: playerReducer,
  dealer: dealerReducer,
  dealerHand: dealerHandReducer,
  deck: deckReducer,
  hand: handReducer,
  step: stepReducer,
});
