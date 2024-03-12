// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "./CustomButton";
import { useSelector } from "react-redux";
import { selectWalletAddress } from "../redux/selector";
import WalletData from "../wallet.json";

const Wallet = ({ setShowWallet, showWallet }) => {
   const currentWalletAddress = useSelector(selectWalletAddress);

   const currentWallet = WalletData.filter(
      (wallet) => wallet.walletAddress === currentWalletAddress
   );
   console.log(currentWallet);

   const handleCloseWallet = () => {
      setShowWallet(!showWallet);
   };

   function formatWalletAddress(walletAddress) {
      // Check if walletAddress is provided and has at least 8 characters
      if (!walletAddress || walletAddress.length < 8) {
         return walletAddress; // Return the original address if it's not valid
      }

      // Extract the first 5 characters and the last 3 characters of the wallet address
      const firstFive = walletAddress.substring(0, 5);
      const lastThree = walletAddress.substring(walletAddress.length - 5);

      // Join the extracted characters with '...' in between
      return `${firstFive}...${lastThree}`;
   }

   return (
      <div className="absolute top-4 right-0 left-[35px] bottom-0 md:right-10 md:left-[unset] md:bottom-[unset]">
         <div className="absolute z-[0] top-4 left-[-30px] bottom-0 w-16 bg-[rgba(0,0,0,0.05)] backdrop-blur-[10px] p-2 rounded-xl">
            <FontAwesomeIcon
               icon={faAngleDoubleRight}
               className="text-base cursor-pointer"
               onClick={handleCloseWallet}
            />
         </div>

         {/* wallet */}
         <div className="wallet relative z-50 w-[full] h-full flex flex-col gap-10 border-1 border-richBlack rounded-xl bg-white p-5 overflow-y-hidden md:rounded-3xl md:border-2 md:border-richBlack md:w-[350px] md:h-[650px] lg:w-[450px] lg:h-[700px]">
            <div className="flex justify-between items-center">
               <div className="flex items-center gap-3">
                  <div className="circle h-[35px] w-[35px] rounded-full bg-metallicBlue md:h-[50px] md:w-[50px]"></div>

                  <div className="flex items-center gap-3">
                     <span>
                        {formatWalletAddress(currentWallet[0]?.walletAddress)}
                     </span>
                     <FontAwesomeIcon icon={faClone} />
                  </div>
               </div>

               <div>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
               </div>
            </div>

            {/*  */}
            <div className="wallet-body flex flex-col gap-14 overflow-y-scroll">
               <div className="">
                  <span className="text-sm text-gray">In your wallet</span>
                  <div className="text-4xl font-semibold text-richBlack">
                     {currentWallet[0]?.balance}
                  </div>
               </div>

               <div className="flex flex-col gap-6 px-3">
                  <div className="text-2xl font-extrabold text-black">
                     Your NFTs
                  </div>

                  <div className="flex flex-col gap-8 pb-5">
                     <div className="flex justify-center items-center py-6">
                        <span>You dont own any NFts yet</span>
                     </div>

                     <CustomButton isWalletBtn>Start shopping</CustomButton>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Wallet;