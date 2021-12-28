import { combineReducers } from "redux";
import harryPotterReducer from "./harryPotter.reducer";

export default combineReducers({
  harryPotter: harryPotterReducer
});
