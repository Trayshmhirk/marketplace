// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { selectWalletAddress } from "../redux/selector";
import { useSelector } from "react-redux";
import Wallet from "./Wallet";

const Header = () => {
   const navigate = useNavigate();
   const wallet = useSelector(selectWalletAddress);

   const [toggleAccount, setToggleAccount] = useState();
   const [showWallet, setShowWallet] = useState(false);

   useEffect(() => {
      setToggleAccount(!!wallet);
   }, [wallet]);

   const handleConnectWallet = () => {
      navigate("/connect-wallet");
   };

   const handleShowWallet = () => {
      //
      setShowWallet(!showWallet);

      // Add overflow:hidden to body when the wallet is shown at md screens and lower
      if (!showWallet && window.innerWidth <= 768) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "auto";
      }
   };

   return (
      <header className="w-screen flex justify-center">
         <div className="container flex justify-between items-center p-5">
            <h1 className="text-xl font-bold md:text-[32px]">MARKETPLACE.</h1>
            <CustomButton
               isHeaderBtn
               handleBtnClick={
                  toggleAccount ? handleShowWallet : handleConnectWallet
               }
            >
               {toggleAccount ? "Account" : "Connect Wallet"}
            </CustomButton>
         </div>

         {showWallet && (
            <Wallet setShowWallet={setShowWallet} showWallet={showWallet} />
         )}
      </header>
   );
};

export default Header;
