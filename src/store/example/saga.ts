import FetchService, { ApiResponse } from '@/utils/network/fetchService';
import { call, put, takeLatest } from 'redux-saga/effects';
import { exampleAction, exampleActionAsync, getTime } from './action';

function* exampleSaga({ payload }: ReturnType<typeof exampleAction>) {
  yield put(exampleActionAsync(payload));
}

function* getTimeSaga({ payload }: ReturnType<typeof getTime>) {
  const { callback } = payload;
  const worldclockApiUrl = 'json/est/now';
  const response: ApiResponse<{ [key: string]: unknown }> = yield call(FetchService, worldclockApiUrl);
  callback(response);
}

export function* watchExample() {
  yield takeLatest(exampleAction.type, exampleSaga);
}

export function* watchGetTime() {
  yield takeLatest(getTime.type, getTimeSaga);
}
