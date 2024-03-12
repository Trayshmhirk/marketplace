// import React from 'react'

const CustomButton = ({
   children,
   isHeaderBtn,
   isBlackBtn,
   isBorderBtn,
   isNFTCardBtn,
   isWalletBtn,
   isCloseModalBtn,
   handleNavigate,
   handleBtnClick,
   handleCloseModal,
}) => {
   const btnStyle = `
      text-xs md:text-base rounded-[87px]
      ${isHeaderBtn ? "py-2 px-4 border border-darkGunmetal md:py-4 md:px-7" : ""}
      ${isBlackBtn ? "w-full p-4 bg-darkGunmetal text-white xl:w-[245px]" : ""}
      ${isWalletBtn ? "w-full p-4 bg-darkGunmetal text-white" : ""}
      ${isBorderBtn ? "w-full p-4 border border-darkGunmetal xl:w-[245px]" : ""}
      ${isNFTCardBtn ? "w-[60%] flex items-center justify-center gap-2 p-4 bg-lotionWhite md:p-6 md:w-[70%]" : ""}
      ${isCloseModalBtn ? "w-full bg-darkGunmetal text-white font-bold py-2 px-4" : ""}

   `;

   const handleClick = (e) => {
      e.stopPropagation();

      if (handleBtnClick) {
         handleBtnClick();
      } else if (handleNavigate) {
         handleNavigate();
      } else if (handleCloseModal) {
         handleCloseModal();
      } else {
         null;
      }
   };

   return (
      <button className={btnStyle} onClick={handleClick}>
         {children}
      </button>
   );
};

export default CustomButton;
