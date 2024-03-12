// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./App.css";
import Router from "./router";
import { fetchWalletData } from "./redux/walletSlice";
import { useDispatch } from "react-redux";

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      // Dispatch the thunk action to fetch wallet data when the component mounts
      dispatch(fetchWalletData());
   }, [dispatch]);

   return (
      <>
         <Router />
      </>
   );
}

export default App;
