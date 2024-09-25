import { all, fork } from 'redux-saga/effects';
import { watchExample, watchGetTime } from './example/saga';

export default function* allSagas() {
  yield all([fork(watchExample), fork(watchGetTime)]);
}
