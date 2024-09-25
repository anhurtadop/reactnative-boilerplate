import { put, takeLatest } from 'redux-saga/effects';
import { exampleAction, exampleActionAsync } from './action';

function* exampleSaga({ payload }: ReturnType<typeof exampleAction>) {
  yield put(exampleActionAsync(payload));
}

export function* watchExample() {
  yield takeLatest(exampleAction.type, exampleSaga);
}
