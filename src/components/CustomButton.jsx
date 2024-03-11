// import React from 'react'

const CustomButton = ({
   children,
   isHeaderBtn,
   isBlackBtn,
   isBorderBtn,
   isNFTCardBtn,
}) => {
   const btnStyle = `
      text-xs md:text-base rounded-[87px]
      ${isHeaderBtn ? "py-2 px-4 border border-darkGunmetal hover:bg-darkGunmetal hover:text-chineseWhite md:py-4 md:px-7" : ""}
      ${isBlackBtn ? "w-full p-4 bg-darkGunmetal text-white xl:w-[245px]" : ""}
      ${isBorderBtn ? "w-full p-4 border border-darkGunmetal xl:w-[245px]" : ""}
      ${isNFTCardBtn ? "w-[60%] flex items-center justify-center gap-2 p-4 bg-lotionWhite md:p-6 md:w-[70%]" : ""}

   `;

   return <button className={btnStyle}>{children}</button>;
};

export default CustomButton;
