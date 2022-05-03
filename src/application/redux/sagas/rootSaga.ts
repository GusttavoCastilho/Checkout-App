import { all } from 'redux-saga/effects';
import plantSaga from './plantSaga';

const sagaList = [plantSaga()];

export const rootSagas = function* rootSagas(): Generator {
  return yield all(sagaList);
};
