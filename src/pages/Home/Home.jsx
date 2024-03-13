// eslint-disable-next-line no-unused-vars
import React from "react";
import { heroArtistImage, heroImage } from "../../image";
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import { useSelector } from "react-redux";
import { selectNftsData } from "../../redux/selector";

const Home = () => {
   const NFTsData = useSelector(selectNftsData);

   return (
      <div className="w-screen flex justify-center">
         <div className="container flex flex-col p-5 gap-20">
            <Hero
               collection="Night sky collection"
               title="With the stars"
               heroArtistImage={heroArtistImage}
               artistName="Léa Jacquot"
               heroImage={heroImage}
            />

            <section className="collection flex flex-col gap-10 mb-20">
               <h2 className="text-xl font-extrabold text-black md:text-2xl">
                  Collections
               </h2>

               <div className="flex flex-wrap justify-between gap-10">
                  <Card NFTs={NFTsData} />
               </div>
            </section>
         </div>
      </div>
   );
};

export default Home;
