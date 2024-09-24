import { put, takeLatest } from 'redux-saga/effects';
import { exampleAction } from './action';

function* exampleSaga({ payload }: ReturnType<typeof exampleAction>) {
  yield put(exampleAction(payload));
}

export function* watchExample() {
  yield takeLatest(exampleAction.type, exampleSaga);
}
