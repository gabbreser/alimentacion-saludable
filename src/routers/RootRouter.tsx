import { Pages } from "configuration/constants";
import { ContactPage } from "pages/Contact";
import { NotFoundPage } from "pages/Error";
import { HomePage } from "pages/Home";
import { RecipesListPage } from "pages/Recipe";
import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import { OrdersListPage } from "pages/Order";

const RootRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRouter />}>
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
