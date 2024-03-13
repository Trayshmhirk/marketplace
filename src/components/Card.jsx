// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
   selectToggleWalletAccount,
   selectWalletAddress,
   selectWalletData,
} from "../redux/selector";
import { setWalletData } from "../redux/walletSlice";
import { setShowBuyModal, setToggleWalletAccount } from "../redux/toggleSlice";
import { setCurrentNftCollection } from "../redux/nftsSlice";

const Card = ({ NFTs, isSubNFTs }) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const walletAddress = useSelector(selectWalletAddress);
   const walletData = useSelector(selectWalletData);
   const toggleWalletAccount = useSelector(selectToggleWalletAccount);

   const [displayedCardBtnId, setDisplayedCardBtnId] = useState(null);
   const [isTouchDevice, setIsTouchDevice] = useState(false);

   useEffect(() => {
      // Detect if the device supports touch
      setIsTouchDevice("ontouchstart" in window);
   }, []);

   const handleDisplayCardBtn = (id) => {
      if (!isTouchDevice) {
         // For non-touch devices, toggle the button visibility on hover
         setDisplayedCardBtnId(id === displayedCardBtnId ? null : id);
      }
   };

   const handleClick = (id) => {
      if (isTouchDevice) {
         // For touch devices, toggle the button visibility on click
         setDisplayedCardBtnId(id === displayedCardBtnId ? null : id);
      }
   };

   const handleNavigate = (item) => {
      if (toggleWalletAccount) {
         dispatch(setToggleWalletAccount());
      }

      navigate("collections");
      dispatch(setCurrentNftCollection(item));
   };

   const handleBuyNFT = (item) => {
      if (walletAddress) {
         const updatedWalletData = walletData.map((wallet) => {
            if (wallet.walletAddress === walletAddress) {
               // If the wallet address matches, update its NFTs array
               return {
                  ...wallet,
                  NFTs: [...wallet.NFTs, item],
               };
            } else {
               // If the wallet address doesn't match, return the unchanged wallet object
               return wallet;
            }
         });

         // Update the walletData with the new wallet containing the bought NFT
         dispatch(setShowBuyModal());
         dispatch(setWalletData(updatedWalletData));
         setDisplayedCardBtnId(item.id === displayedCardBtnId ? null : item.id);
      } else {
         navigate("/connect-wallet");
      }
   };

   const truncateString = (str, num) => {
      if (str.length <= num) {
         return str;
      }
      return str.slice(0, num) + " ...";
   };

   return (
      <>
         {NFTs.map((item) => (
            <div
               key={item.id}
               className={`card h-fit w-full flex flex-col gap-9 p-4 pb-6 rounded-[20px] bg-lotionWhite cursor-pointer md:rounded-[47px] md:w-[45.3%] xl:w-[30.3%] transition-[transform] duration-300 ease-in-out ${displayedCardBtnId ? "hover:transform hover:-translate-y-3 " : ""}`}
               onMouseEnter={() => handleDisplayCardBtn(item.id)}
               onMouseLeave={() => handleDisplayCardBtn(null)}
               onClick={() => handleClick(item.id)}
            >
               <div
                  className={`${isSubNFTs ? "h-[345px]" : "h-[227px]"}  w-full overflow-hidden rounded-[15px] md:rounded-[30px]`}
                  style={{
                     background: `url(${item.nftImage}) no-repeat center center / cover`,
                  }}
               >
                  {displayedCardBtnId === item.id && (
                     <div className="h-full w-full flex items-center justify-center bg-[rgba(0,0,0,0.375)]">
                        <CustomButton
                           isNFTCardBtn
                           handleNavigate={() =>
                              isSubNFTs
                                 ? handleBuyNFT(item)
                                 : handleNavigate(item)
                           }
                        >
                           <span>{`${isSubNFTs ? "Buy" : "Go to collection"}`}</span>
                           <FontAwesomeIcon
                              icon={faArrowRight}
                              className="mt-[2px]"
                           />
                        </CustomButton>
                     </div>
                  )}
               </div>

               <div
                  className={`flex flex-col gap-5 px-2 ${isSubNFTs ? "mb-8" : ""}`}
               >
                  <div className="flex justify-between items-center">
                     <h3 className="font-bold text-xl text-black md:text-2xl">
                        {item.name}
                     </h3>
                     <span
                        className={`text-xs rounded-[87px] ${isSubNFTs ? "bg-soap" : "bg-chineseWhite"} font-medium py-2 px-9 md:px-7 lg:px-9`}
                     >
                        {item.amount}
                     </span>
                  </div>

                  {isSubNFTs ? (
                     <></>
                  ) : (
                     <div>
                        <span className="text-sm text-auroMetalSaurus">
                           Price range: {item.priceRange}
                        </span>
                        <p className="">
                           {truncateString(item.description, 70)}
                        </p>
                     </div>
                  )}
               </div>

               {isSubNFTs ? (
                  <></>
               ) : (
                  <div className="flex items-center gap-4 px-2">
                     <img
                        src={item.artistImage}
                        className="w-[40px] h-[40px]"
                        alt=""
                     />
                     <div>
                        <span className="text-xs text-auroMetalSaurus">
                           Artist
                        </span>
                        <p className="text-base">{item.artistName}</p>
                     </div>
                  </div>
               )}
            </div>
         ))}
      </>
   );
};

export default Card;
