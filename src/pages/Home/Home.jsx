// import React from "react";
import CustomButton from "../../components/CustomButton";
import { heroArtistImage, heroImage } from "../../image";

const Home = () => {
   return (
      <div className="flex justify-center">
         <div className="container flex flex-col p-5 gap-20">
            <section className="hero">
               <div className="lines"></div>

               <div className="h-fit flex flex-col-reverse justify-between gap-8 p-6 rounded-2xl bg-brightGray md:h-[513px] md:rounded-[30px] md:py-12 md:px-20 md:flex-row  ">
                  <div className="w-full flex flex-col self-center gap-10 md:w-fit">
                     <div className="flex flex-col items-start gap-8">
                        <CustomButton isTrendingBtn>Trending now</CustomButton>

                        <div className="flex flex-col gap-6">
                           <div>
                              <p className="text-base text-auroMetalSaurus md:text-2xl">
                                 Night sky collection
                              </p>
                              <h1 className="text-[36px] font-extrabold text-black md:text-6xl">
                                 With the stars
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
                                 <p className="text-2xl">Léa Jacquot</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="hero-buttons flex flex-col gap-4 md:flex-row">
                        <CustomButton isBlackBtn>Buy</CustomButton>
                        <CustomButton isBorderBtn>See collection</CustomButton>
                     </div>
                  </div>
                  <div className="hidden h-[150px] w-full rounded-lg overflow-hidden md:block md:w-[300px] md:h-full md:rounded-[50px] lg:w-[430px]">
                     <img src={heroImage} className="w-full" alt="" />
                  </div>
               </div>
            </section>

            <section className="collection">
               <h2 className="">Collections</h2>

               <div></div>
            </section>
         </div>
      </div>
   );
};

export default Home;
