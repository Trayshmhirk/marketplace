import { createSlice } from "@reduxjs/toolkit";
// import nfts from "../NFTData.json";

export const nftsSlice = createSlice({
   name: "nfts",
   initialState: {
      nftsData: [],
      currentNftCollection: {},
   },
   reducers: {
      setNfts: (state, action) => {
         state.nftsData = action.payload;
      },
      setCurrentNftCollection: (state, action) => {
         state.currentNftCollection = action.payload;
      },
   },
});

export const { setNfts, setCurrentNftCollection } = nftsSlice.actions;

export default nftsSlice.reducer;
