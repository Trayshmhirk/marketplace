// eslint-disable-next-line no-unused-vars
import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
   return (
      <div className="loading-container w-screen h-screen flex justify-center items-center bg-lotionWhite z-[9999] ">
         <ScaleLoader color="#617587" />
      </div>
   );
};

export default Loading;
