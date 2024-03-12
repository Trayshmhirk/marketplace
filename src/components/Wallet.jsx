// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-regular-svg-icons";
import {
   faArrowRightFromBracket,
   faAngleDoubleRight,
   faX,
} from "@fortawesome/free-solid-svg-icons";
import CustomButton from "./CustomButton";
import { useDispatch, useSelector } from "react-redux";
import {
   selectWalletAddress,
   selectWalletData,
   selectWalletNFTs,
} from "../redux/selector";
import { useNavigate } from "react-router-dom";
import { clearWalletAdress } from "../redux/walletSlice";
import { setToggleWalletAccount } from "../redux/toggleSlice";

const Wallet = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const currentWalletAddress = useSelector(selectWalletAddress);
   const walletData = useSelector(selectWalletData);
   const walletNFTs = useSelector(selectWalletNFTs);

   const [toggleChangeWallet, setToggleChangeWallet] = useState(false);

   const filteredCurrentWallet = walletData.filter(
      (wallet) => wallet.walletAddress === currentWalletAddress
   );
   console.log(filteredCurrentWallet);

   const filteredWalletNFTs = walletNFTs?.filter(
      (wallet) => wallet.walletAddress === currentWalletAddress
   );
   console.log(filteredWalletNFTs);

   const handleCloseWallet = () => {
      dispatch(setToggleWalletAccount());
   };

   const handleShowChangeWallet = () => {
      setToggleChangeWallet(!toggleChangeWallet);
   };

   const handleChangeWallet = () => {
      dispatch(setToggleWalletAccount());
      dispatch(clearWalletAdress());
      navigate("/connect-wallet");
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
         <div className="relative z-50 w-[full] h-full flex flex-col gap-10 border-1 border-richBlack rounded-xl bg-white p-5 overflow-y-hidden md:rounded-3xl md:border-2 md:border-richBlack md:w-[350px] md:h-[650px] lg:w-[450px] lg:h-[700px]">
            <div className="flex justify-between items-center">
               <div className="flex items-center gap-3">
                  <div className="circle h-[35px] w-[35px] rounded-full bg-metallicBlue md:h-[50px] md:w-[50px]"></div>

                  <div className="flex items-center gap-3">
                     <span>
                        {formatWalletAddress(
                           filteredCurrentWallet[0]?.walletAddress
                        )}
                     </span>
                     <FontAwesomeIcon icon={faClone} />
                  </div>
               </div>

               <div onClick={handleShowChangeWallet}>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
               </div>
            </div>

            {/*  */}
            <div className="wallet-body flex flex-col gap-14 overflow-y-scroll">
               <div className="">
                  <span className="text-sm text-gray">In your wallet</span>
                  <div className="text-4xl font-semibold text-richBlack">
                     {filteredCurrentWallet[0]?.balance}
                  </div>
               </div>

               <div className="flex flex-col gap-6 px-3">
                  <div className="text-2xl font-extrabold text-black">
                     Your NFTs
                  </div>

                  <div className="flex flex-col gap-8 pb-5">
                     {filteredCurrentWallet[0]?.NFTs.length > 0 ? (
                        filteredCurrentWallet[0].NFTs.map((item, index) => (
                           <div key={index}>
                              <div
                                 className="h-[227px]  w-full overflow-hidden rounded-[15px] md:rounded-[30px]"
                                 style={{
                                    background: `url(${item.nftImage}) no-repeat center center / cover`,
                                 }}
                              ></div>
                           </div>
                        ))
                     ) : (
                        <>
                           <div className="flex justify-center items-center py-6">
                              <span>You dont own any NFTs yet</span>
                           </div>

                           <CustomButton isWalletBtn>
                              Start shopping
                           </CustomButton>
                        </>
                     )}
                  </div>
               </div>

               {toggleChangeWallet && (
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(255,255,255,0.95)]">
                     <FontAwesomeIcon
                        icon={faX}
                        className="absolute top-10 right-10 text-xl font-bold"
                        onClick={handleShowChangeWallet}
                     />
                     <div className="flex flex-col gap-8">
                        <span className="text-black font-semibold">
                           Do you want to change wallet?
                        </span>
                        <CustomButton
                           isWalletBtn
                           handleNavigate={handleChangeWallet}
                        >
                           Change Wallet
                        </CustomButton>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Wallet;
