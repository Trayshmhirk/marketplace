import { createSlice } from "@reduxjs/toolkit";
import nfts from "../NFTData.json";

export const nftsSlice = createSlice({
   name: "nfts",
   initialState: {
      nftsData: nfts,
      currentNftCollection: {},
   },
   reducers: {
      setNfts: (state, action) => {
         state.nfts = action.payload;
      },
      setCurrentNftCollection: (state, action) => {
         state.currentNftCollection = action.payload;
      },
   },
});

export const { setNfts, setCurrentNftCollection } = nftsSlice.actions;

export default nftsSlice.reducer;
