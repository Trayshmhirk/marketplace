// import React from "react";
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import { useSelector } from "react-redux";
import { selectCurrentNftCollection } from "../../redux/selector";
import { useLocation } from "react-router-dom";

const Collections = () => {
   const location = useLocation();
   const nftData = location.state?.data;

   const currentNftData = useSelector(selectCurrentNftCollection);

   const renderNftData = nftData || currentNftData;

   return (
      <div className="w-screen flex justify-center">
         <div className="container flex flex-col p-5 gap-20">
            <Hero
               collection="Collection"
               title={renderNftData.name}
               heroArtistImage={renderNftData.artistImage}
               artistName={renderNftData.artistName}
               heroImage={renderNftData.nftImage}
               description={renderNftData.description}
               isCollectionPage
            />

            <section className="collection flex flex-col gap-10 mb-20">
               <h2 className="text-xl font-extrabold text-black md:text-2xl">
                  NFTs
               </h2>

               {renderNftData.subNFTs.length > 0 ? (
                  <div className="flex flex-wrap justify-between gap-10">
                     <Card NFTs={renderNftData.subNFTs} isSubNFTs />
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
