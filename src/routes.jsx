import { Suspense } from "@/components";
import { BasicLayout } from "@/pages/BasicLayout";
import React from "react";

const Login = Suspense(React.lazy(() => import("@/pages/Login")));
const PageA = Suspense(React.lazy(() => import("@/pages/pageA")));
const PageB = Suspense(React.lazy(() => import("@/pages/pageB")));

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
