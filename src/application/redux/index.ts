import { configureStore } from '@reduxjs/toolkit';
import plantReducer from './reducers/plant';
import createSagaMiddleware from 'redux-saga';
import { rootSagas } from './sagas/rootSaga';

import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Reactotron from '../../../reactotron';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, plantReducer);

const store = configureStore({
  reducer: {
    plant: persistedReducer,
  },
  enhancers: [Reactotron.createEnhancer!()],
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSagas);

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
