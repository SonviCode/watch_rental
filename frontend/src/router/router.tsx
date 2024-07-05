
import GeneralLayout from "@/components/Layout/General/GeneralLayout";
import PurchaseLayout from "@/components/Layout/Purchase/PurchaseLayout";
import Account from "@/views/Account/Account";
import Invoices from "@/views/Account/Invoices/Invoices";
import Login from "@/views/Auth/Login/Login";
import SignUp from "@/views/Auth/SignUp/SignUp";
import VerifyEmail from "@/views/Auth/Verify/VerifyEmail";
import VerifyPhoneNumber from "@/views/Auth/Verify/VerifyPhoneNumber";
import Contact from "@/views/Contact/Contact";
import ErrorPage from "@/views/Error/ErrorPage";
import Home from "@/views/Home/Home";
import Purchase from "@/views/Purchase/Purchase";
import Subscription from "@/views/Subscription/Subscription";
import Watch from "@/views/Watch/Watch";
import Watchs from "@/views/Watchs/Watchs";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedAuthRoute } from "./ProtectedAuthRoute";

export const router = createBrowserRouter([
  {
    element: <GeneralLayout />,
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
        path: "/verif-sms",
        element: (
          <ProtectedAuthRoute>
            <VerifyPhoneNumber />
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
  {
    element: <PurchaseLayout />,
    children: [{ path: "/purchase", element: <Purchase /> }],
  },
]);
