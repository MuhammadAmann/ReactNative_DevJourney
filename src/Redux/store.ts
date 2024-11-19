import { combineReducers, configureStore } from '@reduxjs/toolkit'
import FavouriteItemReducer from '../Redux/Features/FavouriteRestaurant'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { reduxStorage } from '../Services/Storage';

const persistConfig = {
  key: 'rootss',
  storage: reduxStorage,
};

const rootReducer = combineReducers({
  FavouriteItemReducer
}) 

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      // serializableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store);
