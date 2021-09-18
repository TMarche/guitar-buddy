import { OrderedMap } from "immutable";

import {
    SET_TRUE,
    SET_FALSE,
    ADD_SESSION,
    DELETE_SESSION,
    EDIT_SESSION,
} from "../actions/types";

const INITIAL_STATE = OrderedMap({
    truthiness: null,
    sessions: OrderedMap(),
});

const buddyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TRUE:
            return state.set("truthiness", "true");
        case SET_FALSE:
            return state.set("truthiness", "false");
        case ADD_SESSION:
            return state.setIn(["sessions", action.payload.id], action.payload);
        case DELETE_SESSION:
            return state.removeIn(["sessions", action.payload.id]);
        default:
            return state;
    }
};

export default buddyReducer;
