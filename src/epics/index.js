import { combineEpics } from "redux-observable";
import pingEpic from './ping';
import fetchUserEpic from './fetchUserEpic';

export const rootEpic = combineEpics(
    pingEpic,
    fetchUserEpic
);