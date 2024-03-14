// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
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
   selectToggleWalletAccount,
   selectWalletAddress,
   selectWalletData,
} from "../redux/selector";
import { useNavigate } from "react-router-dom";
import { clearWalletAdress } from "../redux/walletSlice";
import { setToggleWalletAccount } from "../redux/toggleSlice";

const Wallet = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const currentWalletAddress = useSelector(selectWalletAddress);
   const walletData = useSelector(selectWalletData);
   const toggleWalletAccount = useSelector(selectToggleWalletAccount);

   const [toggleChangeWallet, setToggleChangeWallet] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false);

   const filteredCurrentWallet = walletData.filter(
      (wallet) => wallet.walletAddress === currentWalletAddress
   );

   useEffect(() => {
      // Simulate a delay to ensure the page has fully loaded
      setIsLoaded(true);
   }, []);

   const handleCloseWallet = () => {
      dispatch(setToggleWalletAccount());

      if (toggleChangeWallet) {
         setToggleChangeWallet(!toggleChangeWallet);
      }
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
      <div
         className={`wallet-container ${toggleWalletAccount && isLoaded ? "wallet-active" : "wallet-hidden"} `}
      >
         <div className="absolute z-[0] top-4 left-[-40px] bottom-0 w-16 bg-[rgba(0,0,0,0.05)] rounded-xl rounded-b-none backdrop-blur-[10px] p-3 md:rounded-xl md:left-[-35px] md:p-2">
            <FontAwesomeIcon
               icon={faAngleDoubleRight}
               className="text-xl cursor-pointer"
               onClick={handleCloseWallet}
            />
         </div>

         {/* wallet */}
         <div className="relative z-50 w-[full] h-full flex flex-col gap-10 border-1 border-richBlack rounded-xl rounded-r-none bg-white p-5 overflow-y-hidden md:rounded-3xl md:border-2 md:border-richBlack md:w-[330px] md:h-[650px] lg:w-[430px] lg:h-[700px]">
            <div className="flex justify-between items-center">
               <div className="flex items-center gap-3">
                  <div className="circle h-[35px] w-[35px] rounded-full bg-metallicBlue md:h-[50px] md:w-[50px]"></div>

                  <div className="flex items-center gap-3">
                     <span>
                        {formatWalletAddress(
                           filteredCurrentWallet[0]?.walletAddress
                        )}
                     </span>
                     <FontAwesomeIcon
                        icon={faClone}
                        className="cursor-pointer"
                     />
                  </div>
               </div>

               <div onClick={handleShowChangeWallet}>
                  <FontAwesomeIcon
                     icon={faArrowRightFromBracket}
                     className="text-xl cursor-pointer"
                  />
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
                        className="absolute top-10 right-10 text-xl font-bold cursor-pointer"
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
