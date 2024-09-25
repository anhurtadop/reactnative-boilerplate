import { RootState } from '.';

export const selectExampleName = (state: RootState) => state.example?.name;

export const selectExampleIsAuth = (state: RootState) => Boolean(state.example?.isAuth);
