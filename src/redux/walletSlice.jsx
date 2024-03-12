import { createSlice } from "@reduxjs/toolkit";

export const walletSlice = createSlice({
   name: "wallet",
   initialState: {
      walletAddress: null,
   },
   reducers: {
      setWalletAddress: (state, action) => {
         state.walletAddress = action.payload;
      },
      clearWalletAdress: (state) => {
         state.walletAddress = null;
      },
   },
});

export const { setWalletAddress, clearWalletAdress } = walletSlice.actions;

export default walletSlice.reducer;
