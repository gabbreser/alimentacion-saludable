import { Pages } from "configuration/constants";
import React from "react";
import { useNavigate, useLocation, Navigate, Outlet } from "react-router-dom";

const PublicRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return <Outlet />;
};

export default PublicRouter;
