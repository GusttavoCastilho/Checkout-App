/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Plant } from '../../http/models/Plant';

export type PlantsInitialState = {
  loading: boolean;
  error: boolean;
  plant: Plant[];
};

const initialState: PlantsInitialState = {
  loading: false,
  error: false,
  plant: [],
};

export const plantSlice = createSlice({
  name: 'plant',
  initialState,
  reducers: {
    getPlantsRequest: (state, { }: PayloadAction) => {
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
  },
});

export default plantSlice.reducer;
