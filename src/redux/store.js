import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import walletSlice from "./walletSlice";
import toggleSlice from "./toggleSlice";
import nftsSlice from "./nftsSlice";

const persistConfig = {
   key: "root",
   storage,
   blacklist: ["toggle", "nfts", "wallet"],
};

const reducers = combineReducers({
   // add reducers
   wallet: walletSlice,
   toggle: toggleSlice,
   nfts: nftsSlice,
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
