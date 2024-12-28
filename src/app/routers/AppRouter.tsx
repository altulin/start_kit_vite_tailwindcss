import Home from "@/pages/home/Home";
import BaseLayout from "@/shared/layouts/Base";
import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "*",
    element: (
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center text-8xl">
        404
      </div>
    ),
  },
]);

const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
