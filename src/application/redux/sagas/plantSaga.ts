import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import { api } from '../../../services/api';
import { PlantRequest } from '../../http/Plants';
import { plantSlice } from '../reducers/plant';

function* getPlantsSaga({ payload }: PayloadAction<any>): unknown {
  try {
    const httpRequest = new PlantRequest(api);
    let response;

    if (payload === 'POPULAR') {
      response = yield httpRequest.getAllPlants();
    } else {
      response = yield httpRequest.getFindCategoryPlants(payload.toLowerCase());
    }

    yield put(plantSlice.actions.getPlantsSuccess(response));
  } catch (error) {
    yield put(plantSlice.actions.getPlansFailure());
  }
}

function* getPlantSearchSaga({ payload }: PayloadAction<any>): unknown {
  try {
    const httpRequest = new PlantRequest(api);

    const response = yield httpRequest.getFindNamePlants(payload);

    yield put(plantSlice.actions.getPlantsSearchSuccess(response));
  } catch (error) {
    yield put(plantSlice.actions.getPlansSearchFailure());
  }
}

export default function* root(): unknown {
  yield takeLatest(plantSlice.actions.getPlantsRequest, getPlantsSaga);
  yield takeLatest(
    plantSlice.actions.getPlantsSearchRequest,
    getPlantSearchSaga,
  );
}
