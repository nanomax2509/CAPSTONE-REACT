import { createBrowserRouter } from "react-router-dom";
import { BaseTemplate } from "../templates/base";
import Home from "../pages/home";
import Carts from "../pages/carts";
import Login from "../pages/login";
import Profile from "../pages/profile";
import Register from "../pages/register";
import Search from "../pages/search";
import Detail from "../pages/detail";

export const router = createBrowserRouter([
  {
    element: <BaseTemplate />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "carts",
        element: <Carts />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
    ],
  },
]);
