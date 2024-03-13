import { createSlice } from "@reduxjs/toolkit";
import wallet from "../wallet";

export const walletSlice = createSlice({
   name: "wallet",
   initialState: {
      walletAddress: null,
      walletData: wallet,
   },
   reducers: {
      setWalletAddress: (state, action) => {
         state.walletAddress = action.payload;
      },
      clearWalletAdress: (state) => {
         state.walletAddress = null;
      },
      setWalletData: (state, action) => {
         state.walletData = action.payload;
      },
   },
});

export const { setWalletAddress, clearWalletAdress, setWalletData } =
   walletSlice.actions;

export default walletSlice.reducer;
