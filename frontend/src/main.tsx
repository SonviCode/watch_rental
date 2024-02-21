import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/index.css";
import Home from "./views/Home/Home";
import Layout from "./components/Layout/Layout";
import Watchs from "./views/Watchs/Watchs";
import Account from "./views/Account/Account";
import Subscription from "./views/Subscription/Subscription";
import Contact from "./views/Contact/Contact";
import ErrorPage from "./views/Error/ErrorPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/account", element: <Account /> },
      { path: "/subscription", element: <Subscription /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  { path: "/watchs", element: <Watchs /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
