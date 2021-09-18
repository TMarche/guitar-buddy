import { OrderedMap } from "immutable";

import { SET_TRUE, SET_FALSE } from "../actions/types";

const INITIAL_STATE = OrderedMap({
    truthiness: null,
});

const buddyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TRUE:
            return state.set("truthiness", "true");
        case SET_FALSE:
            return state.set("truthiness", "false");
        default:
            return state;
    }
};

export default buddyReducer;
