import { Layout } from "./pages/Layout";
import { PageA } from "./pages/PageA";
import { PageB } from "./pages/PageB";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <PageA /> },
      { path: "a", element: <PageA /> },
      { path: "b", element: <PageB /> },
    ],
  },
];
