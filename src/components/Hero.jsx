// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

//

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

   const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
      const timer = setTimeout(() => {
         setCurrentSlide(
            (prevIndex) => (prevIndex + 1) % (NFTs ? NFTs[0].subNFTs.length : 1)
         );
      }, 7000); // Adjust the duration to match your slider

      return () => clearTimeout(timer);
   }, [currentSlide, NFTs]);

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

      navigate("/collections", { state: { data: item } });
      dispatch(setCurrentNftCollection(item));
   };

   function SampleNextArrow(props) {
      const { onClick } = props;
      return (
         <div
            className="absolute top-1/2 -right-3 w-8 h-8 flex items-center justify-center cursor-pointer bg-darkGunmetal rounded-full text-white font-bold md:-right-8 z-[1]"
            onClick={onClick}
         >
            <FontAwesomeIcon icon={faAngleRight} />
         </div>
      );
   }

   function SamplePrevArrow(props) {
      const { onClick } = props;
      return (
         <div
            className="absolute top-1/2 -left-3 w-8 h-8 flex items-center justify-center cursor-pointer bg-darkGunmetal rounded-full text-white font-bold md:-left-8 z-[1]"
            onClick={onClick}
         >
            <FontAwesomeIcon icon={faAngleLeft} />
         </div>
      );
   }

   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 700,
      autoplaySpeed: 7000,
      cssEase: "ease-in-out",
      // arrows: false,
      // touchMove: true,
      // swipe: true,
      nextArrow: <SampleNextArrow className="w-8" />,
      prevArrow: <SamplePrevArrow />,
      afterChange: (index) => setCurrentSlide(index),
   };

   return (
      <section className="hero">
         {isHomeHero ? (
            <div className="flex flex-col gap-3">
               <div className="lines h-[14px] flex items-center gap-4 px-2 md:px-6">
                  {subNFTs.map((_, index) => (
                     <div
                        key={index}
                        className="line relative h-full bg-brightGray rounded-3xl overflow-hidden"
                     >
                        {index === currentSlide && (
                           <div
                              className={`dark-background bg-darkGunmetal rounded-3xl`}
                           ></div>
                        )}
                     </div>
                  ))}
               </div>

               <div
                  className={`h-full flex flex-col-reverse justify-between gap-9 rounded-2xl bg-brightGray px-0 py-6 md:py-9 md:px-10 md:rounded-[30px] md:flex-row xl:py-12 xl:px-14 xl:h-[513px]`}
               >
                  <div className="slider-container min-h-0 min-w-0">
                     <Slider {...settings}>
                        {subNFTs.map((item, index) => (
                           <div key={index}>
                              <div className="h-full flex flex-col-reverse gap-9 justify-between mx-6 md:flex-row ">
                                 <div className="w-full flex flex-col self-center gap-8 md:gap-10 md:w-[320px] lg:w-[420px] xl:w-fit">
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
                                                {item?.name}
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
                                                <p className="text-2xl">
                                                   {nft.artistName}
                                                </p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>

                                    <div className="hero-buttons flex flex-col gap-4 xl:flex-row">
                                       <CustomButton
                                          isBlackBtn
                                          handleBtnClick={() =>
                                             handleBuyNFT(item)
                                          }
                                       >
                                          Buy
                                       </CustomButton>
                                       <CustomButton
                                          isBorderBtn
                                          handleNavigate={() =>
                                             handleNavigate(nft)
                                          }
                                       >
                                          See collection
                                       </CustomButton>
                                    </div>
                                 </div>
                                 <div
                                    className="h-[300px] w-full rounded-xl overflow-hidden md:block md:w-[300px] md:h-[470px] md:rounded-[30px lg:w-[430px] lg:h-[550px] xl:rounded-[50px] xl:h-[417px]"
                                    style={{
                                       background: `url(${item.nftImage}) no-repeat center center / cover`,
                                    }}
                                 ></div>
                              </div>
                           </div>
                        ))}
                     </Slider>
                  </div>
               </div>
            </div>
         ) : (
            <div
               className={`h-full flex flex-col-reverse justify-between gap-9 rounded-2xl ${isCollectionPage ? "p-4 md:py-7 md:px-10" : "bg-brightGray p-6 md:py-9 md:px-16"} md:rounded-[30px] md:flex-row xl:py-12 xl:px-20 xl:h-[513px]`}
            >
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
            </div>
         )}
      </section>
   );
};

export default Hero;
