// import React from 'react'

const CustomButton = ({ children }) => {
   const btnStyle = `
       
   `;

   return (
      <button
         className={`${btnStyle} py-2 px-4 text-xs border border-darkGunmetal rounded-[87px] sm:py-3 sm:px-5 md:text-base md:py-6 md:px-10`}
      >
         <span>{children}</span>
      </button>
   );
};

export default CustomButton;
