import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import walletSlice from "./walletSlice";

const persistConfig = {
   key: "root",
   storage,
   blacklist: ["modal"],
};

const reducers = combineReducers({
   // add reducers
   wallet: walletSlice,
});
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
});

export const persistor = persistStore(store);

export default store;
