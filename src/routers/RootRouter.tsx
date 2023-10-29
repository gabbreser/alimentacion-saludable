import { Pages } from "configuration/constants";
import React, { Suspense, lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import { SplashPage } from "pages/Splash";

/*
import { ContactPage } from "pages/Contact";
import { NotFoundPage } from "pages/Error";
import { HomePage } from "pages/Home";
import { RecipesListPage } from "pages/Recipe";
import { OrdersListPage } from "pages/Order";
*/
const LazyLoad = (routing: any, time?: number) =>
  lazy(() => {
    return Promise.all([
      routing,
      new Promise((resolve) => setTimeout(resolve, time ?? 1000)),
    ]).then(([moduleExports]) => moduleExports);
  });

const HomePage = LazyLoad(import(`pages/Home/HomePage`), 1800);
const ContactPage = LazyLoad(import("pages/Contact/ContactPage"));
const NotFoundPage = LazyLoad(import("pages/Error/NotFoundPage"));
const RecipesListPage = LazyLoad(import("pages/Recipe/RecipesListPage"));
const OrdersListPage = LazyLoad(import("pages/Order/OrdersListPage"));

const SuspenseLayout = () => (
  <Suspense fallback={<SplashPage />}>
    <Outlet />
  </Suspense>
);

const RootRouter = () => {
  return (
    <Routes>
      <Route element={<SuspenseLayout />}>
        <Route path={Pages.HOMEPAGE} element={<HomePage />} />
        <Route path={Pages.ORDERSLISTPAGE} element={<OrdersListPage />} />
        <Route path={Pages.RECIPESLISTPAGE} element={<RecipesListPage />} />
        <Route path={Pages.CONTACTPAGE} element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
