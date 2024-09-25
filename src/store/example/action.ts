import { SagaCallback } from '@/utils/common';
import { createAction } from '@reduxjs/toolkit';
import { EXAMPLE_ACTION, EXAMPLE_ACTION_ASYNC, EXAMPLE_AUTH, EXAMPLE_GET_TIME } from './action-types';

export const exampleAction = createAction<string>(EXAMPLE_ACTION);
export const exampleActionAsync = createAction<string>(EXAMPLE_ACTION_ASYNC);

export const setAuth = createAction<boolean>(EXAMPLE_AUTH);
export const getTime = createAction<{ callback: SagaCallback<{ [key: string]: unknown }> }>(EXAMPLE_GET_TIME);
