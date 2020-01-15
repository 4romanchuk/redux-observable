import { takeUntil, map, mergeMap, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { ofType } from 'redux-observable';

const fetchUser = id => ({ type: 'FETCH_USER', payload: id });
const fetchUserFulfilled = payload => ({ type: 'FETCH_USER_FULFILLED', payload });
const cancelFetchUser = () => ({ type: 'FETCH_USER_CANCELLED' });

const fakeAjax = url => of({
    id: url.substring(url.lastIndexOf('/') + 1),
    firstName: 'Bilbo',
    lastName: 'Baggins'
  }).pipe(delay(1000));


const fetchUserEpic = action$ => action$.pipe(
    ofType('FETCH_USER'),
    mergeMap(action => fakeAjax(`/api/users/${action.payload}`).pipe(
        map(response => fetchUserFulfilled(response)),
        takeUntil(action$.pipe(
            ofType('FETCH_USER_CANCELLED')
        ))
    ))
);

export default fetchUserEpic;
