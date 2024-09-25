import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { PersistConfig, persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import exampleReducer from './example/reducer';
import allSagas from './sagas';

const rootReducer = combineReducers({
  example: exampleReducer,
});

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const logger = createLogger({
  predicate: () => __DEV__,
  collapsed: true,
  duration: true,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    })
      .concat(sagaMiddleware)
      .concat(logger),
});

sagaMiddleware.run(allSagas);

const persistor = persistStore(store);

const getPersistor = () => persistor;
const getStore = () => store;
const getState = () => {
  return store.getState();
};

export { getPersistor, getState, getStore };

export type RootState = ReturnType<typeof getState>;
export type AppDispatch = typeof store.dispatch;
