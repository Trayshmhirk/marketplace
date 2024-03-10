// import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Layout = ({ children }) => {
   return (
      <div className="h-screen w-screen">
         <Header />
         <div className="container flex flex-col gap-6">{children}</div>
         <Footer />
      </div>
   );
};

export default Layout;
