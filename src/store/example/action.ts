import { createAction } from '@reduxjs/toolkit';
import { EXAMPLE_ACTION, EXAMPLE_ACTION_ASYNC } from './action-types';

export const exampleAction = createAction<string>(EXAMPLE_ACTION);
export const exampleActionAsync = createAction<string>(EXAMPLE_ACTION_ASYNC);
