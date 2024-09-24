import { RootState } from '.';

export const selectExampleName = (state: RootState) => state.example?.name;
