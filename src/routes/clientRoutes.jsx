import React from "react";
import LayoutMain from "../layouts/LayoutMain";
import NotFound from "../pages/NotFound";
import Product from "../pages/client/Product";
import Category from "../pages/client/Category";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import Home from "../pages/client/Home";

const clientRoutes = [
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { path: "", element: <Home /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/product", element: <Product /> },
      { path: "/category", element: <Category /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default clientRoutes;
