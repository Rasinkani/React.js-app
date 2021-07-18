// Reducers: combine all reducers of the app
import { combineReducers } from "redux";

import questions from "./modules/questions/ducks";

export default combineReducers({
  Questions: questions,
});
