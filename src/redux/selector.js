import { createSelector } from "reselect";

const selectWalletState = (state) => state.wallet;
const selectToggleState = (state) => state.toggle;

export const selectWalletAddress = createSelector(
   selectWalletState,
   (wallet) => wallet.walletAddress
);

export const selectWalletData = createSelector(
   selectWalletState,
   (wallet) => wallet.walletData
);

export const selectToggleWalletAccount = createSelector(
   selectToggleState,
   (toggle) => toggle.showWalletAccount
);

export const selectShowBuyModal = createSelector(
   selectToggleState,
   (toggle) => toggle.showBuyModal
);
