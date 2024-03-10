// import React from 'react'

const CustomButton = ({
   children,
   isTrendingBtn,
   isHeaderBtn,
   isBlackBtn,
   isBorderBtn,
}) => {
   const btnStyle = `
      text-xs md:text-base rounded-[87px]
      ${isTrendingBtn ? "bg-piggyPink py-2 px-9 md:text-xs" : ""}
      ${isHeaderBtn ? "py-2 px-4 border border-darkGunmetal sm:py-3 sm:px-5 md:py-6 md:px-10" : ""}
      ${isBlackBtn ? "w-full p-4 bg-darkGunmetal text-white w-[245px]" : ""}
      ${isBorderBtn ? "w-full p-4 border border-darkGunmetal w-[245px]" : ""}

   `;

   return (
      <button className={btnStyle}>
         <span>{children}</span>
      </button>
   );
};

export default CustomButton;
