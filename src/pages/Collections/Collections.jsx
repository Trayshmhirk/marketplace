// import React from "react";
import { useLocation } from "react-router-dom";
import Hero from "../../components/Hero";
import Card from "../../components/Card";

const Collections = () => {
   const location = useLocation();
   const NFTData = location.state?.data;

   return (
      <div className="w-screen flex justify-center">
         <div className="container flex flex-col p-5 gap-20">
            <Hero
               collection="Collection"
               title={NFTData.name}
               heroArtistImage={NFTData.artistImage}
               artistName={NFTData.artistName}
               heroImage={NFTData.nftImage}
               description={NFTData.description}
               isCollectionPage
            />

            <section className="collection flex flex-col gap-10 mb-20">
               <h2 className="text-xl font-extrabold text-black md:text-2xl">
                  NFTs
               </h2>

               <div className="flex flex-wrap justify-between gap-7">
                  <Card NFTs={NFTData.subNFTs} isSubNFTs />
               </div>
            </section>
         </div>
      </div>
   );
};

export default Collections;
