// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout.jsx";

// lazy loading
// const Layout = lazy(() => import("./pages/Layout/Layout.jsx"));
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Collections = lazy(() => import("./pages/Collections/Collections.jsx"));
const ConnectWallet = lazy(
   () => import("./pages/ConnectWallet/ConnectWallet.jsx")
);

const Router = () => {
   return (
      <Suspense /*fallback={<div></div>}*/>
         <Routes>
            <Route
               path="/"
               element={
                  <Layout>
                     <Home />
                  </Layout>
               }
            />
            <Route
               path="collections"
               element={
                  <Layout>
                     <Collections />
                  </Layout>
               }
            />
            <Route
               path="connect-wallet"
               element={
                  <Layout showFooter={true}>
                     <ConnectWallet />
                  </Layout>
               }
            />
         </Routes>
      </Suspense>
   );
};

export default Router;
