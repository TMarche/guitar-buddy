import { ofType, combineEpics } from "redux-observable";
import { delay, mapTo } from "rxjs/operators";
import { SET_TRUE, SET_FALSE } from "../actions/types";

const epic1 = (action$, state$) =>
    action$.pipe(ofType(SET_TRUE), delay(1000), mapTo({ type: SET_FALSE }));

const epic2 = (action$, state$) =>
    action$.pipe(ofType(SET_FALSE), delay(1000), mapTo({ type: SET_TRUE }));

export default combineEpics(epic1, epic2);
