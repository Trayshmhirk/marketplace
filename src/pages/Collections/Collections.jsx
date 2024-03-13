// import React from "react";
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import { useSelector } from "react-redux";
import { selectCurrentNftCollection } from "../../redux/selector";

const Collections = () => {
   const currentNftData = useSelector(selectCurrentNftCollection);

   return (
      <div className="w-screen flex justify-center">
         <div className="container flex flex-col p-5 gap-20">
            <Hero
               collection="Collection"
               title={currentNftData.name}
               heroArtistImage={currentNftData.artistImage}
               artistName={currentNftData.artistName}
               heroImage={currentNftData.nftImage}
               description={currentNftData.description}
               isCollectionPage
            />

            <section className="collection flex flex-col gap-10 mb-20">
               <h2 className="text-xl font-extrabold text-black md:text-2xl">
                  NFTs
               </h2>

               {currentNftData.subNFTs.length > 0 ? (
                  <div className="flex flex-wrap justify-between gap-10">
                     <Card NFTs={currentNftData.subNFTs} isSubNFTs />
                  </div>
               ) : (
                  <span className="py-7 text-center text-auroMetalSaurus italic font-medium">
                     There are currently no NFTs in this collection
                  </span>
               )}
            </section>
         </div>
      </div>
   );
};

export default Collections;
