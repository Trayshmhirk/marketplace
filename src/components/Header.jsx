// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { selectWalletAddress } from "../redux/selector";
import { setToggleWalletAccount } from "../redux/toggleSlice";
import { useDispatch, useSelector } from "react-redux";
import Wallet from "./Wallet";

const Header = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const wallet = useSelector(selectWalletAddress);

   const [toggleAccount, setToggleAccount] = useState();

   useEffect(() => {
      setToggleAccount(!!wallet);
   }, [wallet]);

   const handleConnectWallet = () => {
      navigate("/connect-wallet");
   };

   const handleShowWallet = () => {
      //;
      dispatch(setToggleWalletAccount());
   };

   return (
      <header className="w-screen flex justify-center">
         <div className="container relative flex justify-between items-center p-5">
            <h1 className="text-xl font-bold md:text-[32px]">MARKETPLACE.</h1>
            <CustomButton
               isHeaderBtn
               handleBtnClick={
                  toggleAccount ? handleShowWallet : handleConnectWallet
               }
            >
               {toggleAccount ? "Account" : "Connect Wallet"}
            </CustomButton>

            <Wallet />
         </div>
      </header>
   );
};

export default Header;
