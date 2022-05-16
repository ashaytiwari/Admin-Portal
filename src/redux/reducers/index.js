import { combineReducers } from "redux";
import breakingBadReducer from "./breakingBad.reducer";
import harryPotterReducer from "./harryPotter.reducer";
import uiReducer from "./ui.reducer";
import luciferQuotesReducer from "./common.reducer";
import profileReducer from "./profile.reducer";

export default combineReducers({
  harryPotter: harryPotterReducer,
  breakingBad: breakingBadReducer,
  ui: uiReducer,
  common: luciferQuotesReducer,
  profile: profileReducer
});
