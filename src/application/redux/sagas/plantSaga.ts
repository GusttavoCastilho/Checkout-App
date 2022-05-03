import { put, all, takeLatest } from 'redux-saga/effects';
import { api } from '../../../services/api';
import { PlantRequest } from '../../http/Plants';
import { plantSlice } from '../reducers/plant';

function* getPlantsSaga(): unknown {
  try {
    const httpRequest = new PlantRequest(api);
    const response = yield httpRequest.getAllPlants();

    yield put(plantSlice.actions.getPlantsSuccess(response));
  } catch (error) {
    yield put(plantSlice.actions.getPlansFailure());
  }
}

export default function* root(): unknown {
  yield all([
    yield takeLatest(plantSlice.actions.getPlantsRequest, getPlantsSaga),
  ]);
}
