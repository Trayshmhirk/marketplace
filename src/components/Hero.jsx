// import React from 'react'
import CustomButton from "./CustomButton";

const Hero = ({
   collection,
   title,
   // description,
   heroArtistImage,
   artistName,
   heroImage,
   isCollectionPage,
}) => {
   return (
      <section className="hero">
         <div className="lines"></div>

         <div
            className={`h-fit flex flex-col-reverse justify-between gap-9 p-6 rounded-2xl ${isCollectionPage ? "" : "bg-brightGray"} md:rounded-[30px] md:py-9 md:px-16 md:flex-row xl:py-12 xl:px-20 xl:h-[513px]`}
         >
            <div className="w-full flex flex-col self-center gap-10 md:w-fit">
               <div className="flex flex-col items-start gap-8">
                  <span className="text-xs rounded-[87px] bg-piggyPink py-2 px-6 md:px-9">
                     Trending now
                  </span>

                  <div className="flex flex-col gap-6">
                     <div className="flex flex-col gap-3">
                        <p className="text-base text-auroMetalSaurus lg:text-2xl">
                           {collection}
                        </p>
                        <h1 className="text-[36px] font-extrabold text-black lg:text-[60px] lg:hero-text">
                           {title}
                        </h1>

                        {isCollectionPage && (
                           <p className="w-full xl:w-[600px]">
                              {/* {description} */}
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Esse pariatur facere veritatis atque
                              expedita impedit consectetur? Quas accusantium
                              excepturi aliquid autem repudiandae debitis enim,
                              earum incidunt sunt facere voluptatem recusandae,
                              eius qui voluptatibus impedit dolorum?
                           </p>
                        )}
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
               {isCollectionPage ? (
                  <></>
               ) : (
                  <div className="hero-buttons flex flex-col gap-4 xl:flex-row">
                     <CustomButton isBlackBtn>Buy</CustomButton>
                     <CustomButton isBorderBtn>See collection</CustomButton>
                  </div>
               )}
            </div>
            <div className="hidden w-full rounded-lg overflow-hidden md:block md:w-[250px] md:h-full md:rounded-[30px] xl:rounded-[50px] lg:w-[430px]">
               <img src={heroImage} className="w-full" alt="" />
            </div>
         </div>
      </section>
   );
};

export default Hero;
