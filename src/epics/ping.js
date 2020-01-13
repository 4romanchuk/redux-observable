import { filter, delay, mapTo } from 'rxjs/operators'

const pingEpic = action$ => action$.pipe(
    filter(action => action.type === 'PING'),
    delay(1000),
    mapTo({ type: 'PONG' })
);

export default pingEpic;