// import React from 'react'

import CustomButton from "./CustomButton";

const Header = () => {
   return (
      <header className="w-screen flex justify-center">
         <div className="container flex justify-between items-center p-5">
            <h1 className="text-xl font-bold md:text-[32px]">MARKETPLACE.</h1>
            <CustomButton isHeaderBtn>Connect Wallet</CustomButton>
         </div>
      </header>
   );
};

export default Header;
