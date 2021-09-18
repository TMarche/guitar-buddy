import { combineReducers } from "redux";

import buddyReducer from "./buddyReducer";

export default combineReducers({
    buddy: buddyReducer,
});
