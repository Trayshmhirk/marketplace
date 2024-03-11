// import React from 'react'
import { useDispatch } from "react-redux";
import Wallet from "../../wallet";
import { setWalletAddress } from "../../redux/walletSlice";

const ConnectWallet = () => {
   const dispatch = useDispatch();

   const handleSelectWallet = (walletAddress) => {
      dispatch(setWalletAddress(walletAddress));
   };

   return (
      <div className="connect w-screen flex justify-center items-center">
         <div className="container flex flex-col items-center p-5 gap-8 lg:gap-16">
            <h1 className="text-xl font-extrabold text-black md:text-2xl lg:text-4xl">
               Choose the wallet to connect
            </h1>

            <div className="flex gap-5 items-center md:gap-10">
               {Wallet.map((wallet) => (
                  <div
                     key={wallet.id}
                     onClick={() => handleSelectWallet(wallet.walletAddress)}
                     className="h-[80px] w-[80px] flex items-center justify-center text-xs font-bold bg-lotionWhite rounded-2xl md:h-[150px] md:w-[150px] md:text-base lg:h-[174px] lg:w-[191px]"
                  >
                     {wallet.name}
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ConnectWallet;
