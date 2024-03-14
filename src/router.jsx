// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout.jsx";
import Loading from "./components/Loading.jsx";

function lazyWithMinDelay(factory, minDelayMs = 1000) {
   return React.lazy(() =>
      Promise.all([
         factory(),
         new Promise((resolve) => setTimeout(resolve, minDelayMs)),
      ]).then(([moduleExports]) => moduleExports)
   );
}

// lazy loading
// const Layout = lazy(() => import("./pages/Layout/Layout.jsx"));
const Home = lazyWithMinDelay(() => import("./pages/Home/Home.jsx"));
const Collections = lazyWithMinDelay(
   () => import("./pages/Collections/Collections.jsx")
);
const ConnectWallet = lazyWithMinDelay(
   () => import("./pages/ConnectWallet/ConnectWallet.jsx")
);

const Router = () => {
   return (
      <Suspense fallback={<Loading />}>
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
