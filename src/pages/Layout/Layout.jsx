// import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Layout = ({ children, showFooter }) => {
   return (
      <div className={`h-screen w-screen ${showFooter ? "bg-brightGray" : ""}`}>
         <Header />
         {children}
         {showFooter ? <></> : <Footer />}
      </div>
   );
};

export default Layout;
