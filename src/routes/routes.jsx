import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../page/Home";
import Login from "../page/auth/Login";
import Registration from "../page/auth/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "registration",
        Component: Registration,
      },
    ],
  },
]);
