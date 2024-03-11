// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "./CustomButton";

const Card = ({ NFTs, handleDisplayCardBtn, displayCardBtn }) => {
   return (
      <>
         {/* Card 1 */}
         {NFTs.map((item) => (
            <div
               key={item.id}
               className="card h-fit w-full flex flex-col gap-9 p-4 pb-6 rounded-[20px] bg-lotionWhite cursor-pointer md:rounded-[47px] md:w-[29.3%]"
               onClick={handleDisplayCardBtn}
            >
               <div
                  className="h-[227px] w-full overflow-hidden rounded-[15px] md:rounded-[30px]"
                  style={{
                     background: `url(${item.nftImage}) no-repeat center -80px`,
                  }}
               >
                  {displayCardBtn && (
                     <div className="h-full w-full flex items-center justify-center bg-[rgba(0,0,0,0.175)]">
                        <CustomButton isNFTCardBtn>
                           <span>Go to collection</span>
                           <FontAwesomeIcon
                              icon={faArrowRight}
                              className="mt-[2px]"
                           />
                        </CustomButton>
                     </div>
                  )}
               </div>

               <div className="flex flex-col gap-5 px-2">
                  <div className="flex justify-between items-center">
                     <h3 className="font-bold text-xl text-black md:text-2xl">
                        {item.name}
                     </h3>
                     <span className="text-xs rounded-[87px] bg-chineseWhite font-medium py-2 px-9">
                        {item.amount}
                     </span>
                  </div>

                  <div>
                     <span className="text-sm text-auroMetalSaurus">
                        Price range: {item.priceRange}
                     </span>
                     <p className="">{item.description}</p>
                  </div>
               </div>

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
            </div>
         ))}
      </>
   );
};

export default Card;
