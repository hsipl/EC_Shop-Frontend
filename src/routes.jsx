import { Suspense } from "@/components";
import { BasicLayout } from "@/pages/BasicLayout";
import React from "react";
import Profile from "@/pages/Profile";

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
      { path: "profile", element: <Profile /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];
