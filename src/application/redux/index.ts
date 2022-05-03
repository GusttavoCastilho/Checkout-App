import { configureStore } from '@reduxjs/toolkit';
import plantReducer from './reducers/plant';
import createSagaMiddleware from 'redux-saga';
import { rootSagas } from './sagas/rootSaga';

import Reactotron from '../../../reactotron';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    plant: plantReducer,
  },
  enhancers: [Reactotron.createEnhancer!()],
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSagas);

export type RootState = ReturnType<typeof store.getState>;

export default store;
