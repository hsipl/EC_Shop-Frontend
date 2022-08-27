import { BasicLayout } from "@/pages/BasicLayout";
import { PageA } from "@/pages/PageA";
import { PageB } from "@/pages/PageB";

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
];
