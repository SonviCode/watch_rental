import Layout from "@/components/Layout/Layout";
import Account from "@/views/Account/Account";
import Login from "@/views/Auth/Login/Login";
import SignUp from "@/views/Auth/SignUp/SignUp";
import Contact from "@/views/Contact/Contact";
import ErrorPage from "@/views/Error/ErrorPage";
import Home from "@/views/Home/Home";
import Subscription from "@/views/Subscription/Subscription";
import Watch from "@/views/Watch/Watch";
import Watchs from "@/views/Watchs/Watchs";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedAuthRoute } from "./ProtectedAuthRoute";
import Invoices from "@/views/Account/Invoices/Invoices";
import VerifyEmail from "@/views/Auth/VerifyEmail/VerifyEmail";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/account",
        element: (
          <ProtectedAuthRoute>
            <Account />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "/verif-email",
        element: (
          <ProtectedAuthRoute>
            <VerifyEmail />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "/factures",
        element: (
          <ProtectedAuthRoute>
            <Invoices />
          </ProtectedAuthRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/subscription", element: <Subscription /> },
      { path: "/contact", element: <Contact /> },
      { path: "/watch/:name", element: <Watch /> },
    ],
  },
  { path: "/watchs", element: <Watchs /> },
]);
