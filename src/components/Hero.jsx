// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "./CustomButton";
import {
   selectToggleWalletAccount,
   selectWalletAddress,
   selectWalletData,
} from "../redux/selector";
import { setShowBuyModal, setToggleWalletAccount } from "../redux/toggleSlice";
import { useNavigate } from "react-router-dom";
import { setCurrentNftCollection } from "../redux/nftsSlice";
import { setWalletData } from "../redux/walletSlice";

const Hero = ({
   collection,
   title,
   description,
   heroArtistImage,
   artistName,
   heroImage,
   isCollectionPage,
   isHomeHero,
   NFTs,
}) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const walletAddress = useSelector(selectWalletAddress);
   const walletData = useSelector(selectWalletData);
   const toggleWalletAccount = useSelector(selectToggleWalletAccount);

   const nft = NFTs ? NFTs[0] : {};
   const { subNFTs } = nft;

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
      } else {
         navigate("/connect-wallet");
      }
   };

   const handleNavigate = (item) => {
      if (toggleWalletAccount) {
         dispatch(setToggleWalletAccount());
      }

      navigate("/collections");
      dispatch(setCurrentNftCollection(item));
   };

   return (
      <section className="hero">
         <div
            className={`h-fit flex flex-col-reverse justify-between gap-9 rounded-2xl ${isCollectionPage ? "p-4 md:py-7 md:px-10" : "bg-brightGray p-6 md:py-9 md:px-16"} md:rounded-[30px] md:flex-row xl:py-12 xl:px-20 xl:h-[513px]`}
         >
            {isHomeHero ? (
               <>
                  <div className="w-full flex flex-col self-center gap-8 md:gap-10 md:w-fit">
                     <div className="flex flex-col gap-5 md:items-start md:gap-8">
                        <span className="w-fit text-xs rounded-[87px] bg-piggyPink py-2 px-6 md:px-9">
                           Trending now
                        </span>

                        <div className="flex flex-col gap-6">
                           <div className="flex flex-col md:gap-3">
                              <p className="text-base text-auroMetalSaurus lg:text-2xl">
                                 {`${nft.name} collection`}
                              </p>
                              <h1 className="text-[36px] font-extrabold text-black lg:text-[60px] lg:hero-text">
                                 {subNFTs[1]?.name}
                              </h1>
                           </div>

                           <div className="flex items-center gap-4">
                              <img
                                 src={nft.artistImage}
                                 className="w-[68px] h-[68px]"
                                 alt=""
                              />
                              <div>
                                 <span className="text-xs text-auroMetalSaurus">
                                    Artist
                                 </span>
                                 <p className="text-2xl">{nft.artistName}</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="hero-buttons flex flex-col gap-4 xl:flex-row">
                        <CustomButton
                           isBlackBtn
                           handleBtnClick={() => handleBuyNFT(subNFTs[1])}
                        >
                           Buy
                        </CustomButton>
                        <CustomButton
                           isBorderBtn
                           handleNavigate={() => handleNavigate(nft)}
                        >
                           See collection
                        </CustomButton>
                     </div>
                  </div>
                  <div
                     className="h-[300px] w-full rounded-xl overflow-hidden md:block md:w-[300px] md:h-full md:rounded-[30px] xl:rounded-[50px] lg:w-[430px]"
                     style={{
                        background: `url(${subNFTs[1]?.nftImage}) no-repeat center center / cover`,
                     }}
                  ></div>
               </>
            ) : (
               <>
                  <div className="w-full flex flex-col self-center gap-8 md:gap-10 md:w-fit">
                     <div className="flex flex-col gap-5 md:items-start md:gap-8">
                        <span className="w-fit text-xs rounded-[87px] bg-piggyPink py-2 px-6 md:px-9">
                           Trending now
                        </span>

                        <div className="flex flex-col gap-6">
                           <div className="flex flex-col md:gap-3">
                              <p className="text-base text-auroMetalSaurus lg:text-2xl">
                                 {collection}
                              </p>
                              <h1 className="text-[36px] font-extrabold text-black lg:text-[60px] lg:hero-text">
                                 {title}
                              </h1>

                              <p className="w-full md:w-[300px] lg:w-[400px] xl:w-[600px]">
                                 {description}
                              </p>
                           </div>

                           <div className="flex items-center gap-4">
                              <img
                                 src={heroArtistImage}
                                 className="w-[68px] h-[68px]"
                                 alt=""
                              />
                              <div>
                                 <span className="text-xs text-auroMetalSaurus">
                                    Artist
                                 </span>
                                 <p className="text-2xl">{artistName}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div
                     className="h-[300px] w-full rounded-xl overflow-hidden md:block md:w-[300px] md:h-full md:rounded-[30px] xl:rounded-[50px] lg:w-[430px]"
                     style={{
                        background: `url(${heroImage}) no-repeat center center / cover`,
                     }}
                  ></div>
               </>
            )}
         </div>
      </section>
   );
};

export default Hero;
