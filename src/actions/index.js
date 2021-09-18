import { SET_TRUE, SET_FALSE, ADD_SESSION, DELETE_SESSION } from "./types";

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

export const addSession = (id) => {
    return {
        type: ADD_SESSION,
        payload: {
            id,
            name: "Name",
            description: "TEST",
            duration: 10,
        },
    };
};

export const deleteSession = (id) => {
    return {
        type: DELETE_SESSION,
        payload: {
            id,
        },
    };
};
