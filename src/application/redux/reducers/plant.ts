/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Plant } from '../../http/models/Plant';

export type PlantsInitialState = {
  loading: boolean;
  error: boolean;
  plant: Plant[];
  search: string;
};

const initialState: PlantsInitialState = {
  loading: false,
  error: false,
  plant: [],
  search: '',
};

export const plantSlice = createSlice({
  name: 'plant',
  initialState,
  reducers: {
    getPlantsRequest: (state, { }: PayloadAction<string>) => {
      state.loading = true;
    },
    getPlantsSuccess: (state, { payload }) => {
      state.loading = false;
      state.plant = payload;
    },
    getPlansFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    getPlantsSearchRequest: (state, { }: PayloadAction<string>) => {
      state.loading = true;
    },
    getPlantsSearchSuccess: (state, { payload }) => {
      state.loading = false;
      state.plant = payload;
    },
    getPlansSearchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default plantSlice.reducer;
