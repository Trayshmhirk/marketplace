// import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { selectShowBuyModal } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import { setShowBuyModal } from "../../redux/toggleSlice";
import CustomButton from "../../components/CustomButton";

const Layout = ({ children, showFooter }) => {
   const dispatch = useDispatch();
   const showModal = useSelector(selectShowBuyModal);

   const handleCloseShowModal = () => {
      dispatch(setShowBuyModal());
   };
   return (
      <div
         className={`relative h-screen w-screen ${showFooter ? "bg-brightGray" : ""}`}
      >
         <Header />
         {children}
         {showFooter ? <></> : <Footer />}

         {showModal && (
            <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
               <div className="modal-content flex flex-col gap-7 bg-white p-9 rounded-lg shadow-lg">
                  <div className="modal-header">
                     <h3 className="text-2xl font-bold">
                        NFT bought successfully!
                     </h3>
                  </div>
                  <div className="modal-body flex justify-center">
                     {/* Additional content can go here */}
                     <p>Check your wallet to preview NFT</p>
                  </div>
                  <div className="modal-footer flex justify-center">
                     <CustomButton
                        handleCloseModal={handleCloseShowModal}
                        isCloseModalBtn
                     >
                        Close
                     </CustomButton>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Layout;
