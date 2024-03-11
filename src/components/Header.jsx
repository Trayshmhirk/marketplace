// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";

const Header = () => {
   const navigate = useNavigate();
   const [toggleAccount, setToggleAmount] = useState(false);
   const handleConnectWallet = () => {
      navigate("connect-wallet");
   };

   const handleToggleAccount = () => {
      setToggleAmount(!toggleAccount);
   };

   return (
      <header className="w-screen flex justify-center">
         <div className="container flex justify-between items-center p-5">
            <h1 className="text-xl font-bold md:text-[32px]">MARKETPLACE.</h1>
            <CustomButton
               isHeaderBtn
               handleBtnClick={
                  toggleAccount ? handleToggleAccount : handleConnectWallet
               }
            >
               {toggleAccount ? "Account" : "Connect Wallet"}
            </CustomButton>
         </div>
      </header>
   );
};

export default Header;
