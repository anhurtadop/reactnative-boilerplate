import { all, fork } from 'redux-saga/effects';
import { watchExample } from './example/saga';

export default function* allSagas() {
  yield all([fork(watchExample)]);
}
