import { API_IS_ADMIN } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedAdminRoute = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [isAdmin, setisAdmin] = useState<boolean>();

  const { isLoading } = useFetchData(setisAdmin, API_IS_ADMIN);

  if (isLoading) return;

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};
