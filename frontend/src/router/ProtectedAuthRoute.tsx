import useCheckAuth from "@/hooks/useCheckAuth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedAuthRoute = ({ children }: { children: JSX.Element }) => {
  const { authed, isLoading } = useCheckAuth();

  console.log(authed);
  if (isLoading) return;

  if (!authed) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};
