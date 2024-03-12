import { createSelector } from "reselect";

const selectWalletState = (state) => state.wallet;

export const selectWalletAddress = createSelector(
   selectWalletState,
   (wallet) => wallet.walletAddress
);

export const selectWalletData = createSelector(
   selectWalletState,
   (wallet) => wallet.walletData
);

export const selectWalletNFTs = createSelector(
   selectWalletState,
   (wallet) => wallet.walletNFTs
);
