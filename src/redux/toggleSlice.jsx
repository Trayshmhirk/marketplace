import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
   name: "toggle",
   initialState: {
      showWalletAccount: false,
      showBuyModal: false,
   },
   reducers: {
      setToggleWalletAccount: (state) => {
         state.showWalletAccount = !state.showWalletAccount;
      },
      setShowBuyModal: (state) => {
         state.showBuyModal = !state.showBuyModal;
      },
   },
});

export const { setToggleWalletAccount, setShowBuyModal } = toggleSlice.actions;

export default toggleSlice.reducer;
