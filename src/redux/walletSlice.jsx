import {
   createSlice,
   // createAsyncThunk
} from "@reduxjs/toolkit";
import wallet from "../wallet";

// export const fetchWalletData = createAsyncThunk(
//    "wallet/fetchWalletData",
//    async () => {
//       const response = await fetch("../../src/wallet.json");
//       console.log(response);
//       const data = await response.json();
//       console.log(data);
//       return data;
//    }
// );

export const walletSlice = createSlice({
   name: "wallet",
   initialState: {
      walletAddress: null,
      walletData: wallet,
      // status: "pending",
      // error: null,
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
   // extraReducers: (builder) => {
   //    builder
   //       .addCase(fetchWalletData.pending, (state) => {
   //          state.status = "loading";
   //       })
   //       .addCase(fetchWalletData.fulfilled, (state, action) => {
   //          state.status = "success";
   //          state.walletData = action.payload;
   //       })
   //       .addCase(fetchWalletData.rejected, (state, action) => {
   //          state.status = "failed";
   //          state.error = action.error.message;
   //       });
   // },
});

export const { setWalletAddress, clearWalletAdress, setWalletData } =
   walletSlice.actions;

export default walletSlice.reducer;
