import { API_USER } from "@/constants/Constants";
import useFetchData from "@/hooks/useFetchData";
import { User } from "@/types/userType";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedAuthRoute = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User>();

  const isLoading = useFetchData(setUser, API_USER);

  if (isLoading) return;

  if (!user) return <Navigate to="/login" />;

  return children ? children : <Outlet />;
};
