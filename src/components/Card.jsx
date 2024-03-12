// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectWalletAddress } from "../redux/selector";

const Card = ({ NFTs, isSubNFTs }) => {
   const navigate = useNavigate();
   const walletAddress = useSelector(selectWalletAddress);

   const [displayedCardBtnId, setDisplayedCardBtnId] = useState(null);

   const handleDisplayCardBtn = (id) => {
      setDisplayedCardBtnId(id === displayedCardBtnId ? null : id);
   };

   const handleNavigate = (item) => {
      navigate("collections", { state: { data: item } });
   };

   const handleBuyNFT = (item) => {
      if (walletAddress) {
         console.log(item);
      } else {
         navigate("/connect-wallet");
      }
   };

   return (
      <>
         {NFTs.map((item) => (
            <div
               key={item.id}
               className="card h-fit w-full flex flex-col gap-9 p-4 pb-6 rounded-[20px] bg-lotionWhite cursor-pointer md:rounded-[47px] md:w-[30.3%]"
               onClick={() => handleDisplayCardBtn(item.id)}
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
                        className={`text-xs rounded-[87px] ${isSubNFTs ? "bg-soap" : "bg-chineseWhite"}  font-medium py-2 px-9`}
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
                        <p className="">{item.description}</p>
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
