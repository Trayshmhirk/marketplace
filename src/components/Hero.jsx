// import React from 'react'
import CustomButton from "./CustomButton";

const Hero = ({
   collection,
   title,
   description,
   heroArtistImage,
   artistName,
   heroImage,
   isCollectionPage,
   isHomeHero,
}) => {
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
                                 {collection}
                              </p>
                              <h1 className="text-[36px] font-extrabold text-black lg:text-[60px] lg:hero-text">
                                 {title}
                              </h1>
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

                     <div className="hero-buttons flex flex-col gap-4 xl:flex-row">
                        <CustomButton isBlackBtn>Buy</CustomButton>
                        <CustomButton isBorderBtn>See collection</CustomButton>
                     </div>
                  </div>
                  <div
                     className="h-[300px] w-full rounded-xl overflow-hidden md:block md:w-[300px] md:h-full md:rounded-[30px] xl:rounded-[50px] lg:w-[430px]"
                     style={{
                        background: `url(${heroImage}) no-repeat center center / cover`,
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
