import { SET_TRUE, SET_FALSE, ADD_SESSION, DELETE_SESSION } from "./types";
import moment from "moment";

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

export const addSession = (id, payload) => {
    return {
        type: ADD_SESSION,
        payload: {
            id,
            date: moment(),
            description: payload.description,
            duration: payload.duration,
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
