import AdminLayout from "@/components/Layout/Admin/AdminLayout";
import GeneralLayout from "@/components/Layout/General/GeneralLayout";
import PurchaseLayout from "@/components/Layout/Purchase/PurchaseLayout";
import Account from "@/views/Account/Account";
import Invoices from "@/views/Account/Invoices/Invoices";
import Admin from "@/views/Admin/Admin";
import AdminSubscriptions from "@/views/Admin/Data/subscriptions/AdminSubscriptions";
import AdminUsers from "@/views/Admin/Data/users/AdminUsers";
import AdminWatches from "@/views/Admin/Data/watches/AdminWatches";
import Login from "@/views/Auth/Login/Login";
import SignUp from "@/views/Auth/SignUp/SignUp";
import VerifyEmail from "@/views/Auth/Verify/VerifyEmail";
import VerifyPhoneNumber from "@/views/Auth/Verify/VerifyPhoneNumber";
import Contact from "@/views/Contact/Contact";
import Home from "@/views/Home/Home";
import Purchase from "@/views/Purchase/PurchaseContainer";
import Subscription from "@/views/Subscription/Subscription";
import Watch from "@/views/Watch/Watch";
import Watchs from "@/views/Watchs/Watchs";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { ProtectedAdminRoute } from "./ProtectedAdminRoute";
import { ProtectedAuthRoute } from "./ProtectedAuthRoute";

export const router = createBrowserRouter([
  {
    element: <GeneralLayout />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        element: (
          <ProtectedAuthRoute>
            <Outlet />
          </ProtectedAuthRoute>
        ),
        children: [
          {
            path: "/account",
            element: <Account />,
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
        ],
      },
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/subscription", element: <Subscription /> },
      { path: "/contact", element: <Contact /> },
      { path: "/watch/:name", element: <Watch /> },
    ],
  },
  { path: "/watchs", element: <Watchs /> },
  {
    element: (
      <ProtectedAdminRoute>
        <AdminLayout />
      </ProtectedAdminRoute>
    ),
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/admin/users",
        element: <AdminUsers />,
      },
      {
        path: "/admin/subscriptions",
        element: <AdminSubscriptions />,
      },
      {
        path: "/admin/watches",
        element: <AdminWatches />,
      },
    ],
  },
  {
    element: <PurchaseLayout />,
    children: [{ path: "/purchase", element: <Purchase /> }],
  },
]);
