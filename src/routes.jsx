import { Suspense } from "@/components";
import { BasicLayout } from "@/pages/BasicLayout";
import { PageA } from "@/pages/PageA";
import { PageB } from "@/pages/PageB";
import React from "react";

const Login = Suspense(React.lazy(() => import("@/pages/Login")));

export const routes = [
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      { index: true, element: <PageA /> },
      { path: "a", element: <PageA /> },
      { path: "b", element: <PageB /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];
