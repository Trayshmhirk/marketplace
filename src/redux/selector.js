import { createSelector } from "reselect";

const selectWalletState = (state) => state.wallet;

export const selectWalletAddress = createSelector(
   selectWalletState,
   (wallet) => wallet.walletAddress
);
