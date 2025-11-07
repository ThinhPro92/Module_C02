import React from "react";
import LayoutMain from "../layouts/LayoutMain";
import CreatePro from "../pages/admin/product/CreatePro";
import DetailPro from "../pages/admin/product/DetailPro";
import UpdatePro from "../pages/admin/product/UpdatePro";
import CreateCate from "../pages/admin/categories/CreateCate";
import UpdateCate from "../pages/admin/categories/UpdateCate";
import ProtectedRoute from "../pages/auth/ProtectedRoute";

const adminRoutes = [
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "product/create",
        element: (
          <ProtectedRoute role="admin">
            <CreatePro />
          </ProtectedRoute>
        ),
      },
      {
        path: "product/update/:id",
        element: (
          <ProtectedRoute role="admin">
            <UpdatePro />
          </ProtectedRoute>
        ),
      },
      {
        path: "product/:id",
        element: (
          <ProtectedRoute role="admin">
            <DetailPro />
          </ProtectedRoute>
        ),
      },

      {
        path: "category/create",
        element: (
          <ProtectedRoute role="admin">
            <CreateCate />
          </ProtectedRoute>
        ),
      },
      {
        path: "category/update/:id",
        element: (
          <ProtectedRoute role="admin">
            <UpdateCate />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

export default adminRoutes;
