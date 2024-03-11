import { createSelector } from "reselect";

const selectWalletAddress = (state) => state.wallet;

export const walletSelector = createSelector(
   selectWalletAddress,
   (wallet) => wallet.walletAddress
);
