import { combineReducers } from "redux";
import breakingBadReducer from "./breakingBad.reducer";
import harryPotterReducer from "./harryPotter.reducer";

export default combineReducers({
  harryPotter: harryPotterReducer,
  breakingBad: breakingBadReducer
});
