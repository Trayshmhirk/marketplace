// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./App.css";
import Router from "./router";
import { useDispatch } from "react-redux";
import { setNfts } from "./redux/nftsSlice";

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      const fetchNFTsData = async () => {
         try {
            const res = await fetch("../src/NFTData.json");
            const data = await res.json();

            if (res.status === 200) {
               //
               dispatch(setNfts(data));
            }
         } catch (error) {
            console.error(error);
            // You can also check error.response to see the server's response
            if (error.response) {
               console.error("Error response from server:", error.response);
            }
         }
      };

      fetchNFTsData();
   }, [dispatch]);

   return (
      <>
         <Router />
      </>
   );
}

export default App;
