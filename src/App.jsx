// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./App.css";
import Router from "./router";
import { useDispatch } from "react-redux";
import { setNfts } from "./redux/nftsSlice";
import nftData from "../src/NFTData";

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(setNfts(nftData));
   }, [dispatch]);

   return (
      <>
         <Router />
      </>
   );
}

export default App;
