// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout.jsx";

// lazy loading
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Collections = lazy(() => import("./pages/Collections/Collections.jsx"));

const Router = () => {
   return (
      <Suspense fallback={<div>Loading...</div>}>
         <Layout>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="collections" element={<Collections />} />
            </Routes>
         </Layout>
      </Suspense>
   );
};

export default Router;
