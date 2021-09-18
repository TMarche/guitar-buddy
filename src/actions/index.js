import { SET_TRUE, SET_FALSE } from "./types";

export const setTrue = () => {
    return {
        type: SET_TRUE,
    };
};

export const setFalse = () => {
    return {
        type: SET_FALSE,
    };
};
