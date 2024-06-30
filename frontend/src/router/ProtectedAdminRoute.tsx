import { Navigate, Outlet } from "react-router-dom";

export const ProtectedAdminRoute = ({
  isAllowed,
  children,
}: {
  isAllowed: boolean;
  children: JSX.Element;
}) => {
  if (!isAllowed) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};
