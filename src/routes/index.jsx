import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import clientRoutes from "./clientRoutes";
import adminRoutes from "./adminRoutes";

const router = createBrowserRouter([...clientRoutes, ...adminRoutes]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
