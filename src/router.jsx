import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/main/MainLayout";
import Home from "./layouts/main/pages/Home";
import MovieDetail from "./layouts/main/pages/MovieDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home/:movieId",
        element: <MovieDetail />,
      },
      {
        path: "*",
        element: <h1>Page not found</h1>,
      },
    ],
  },
  
]);

export const MainRouter = () => {
  return <RouterProvider router={router} />;
};
