import useUser from "@/hooks/useUser";
import { User } from "@/types/userType";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";

export type ContextType = { user: User | undefined };

export const ProtectedAuthRoute = () => {
  const { isLoading, user } = useUser();

  if (isLoading) return;

  if (!user) return <Navigate to="/login" />;

  return <Outlet context={{ user } satisfies ContextType} />;
};

// eslint-disable-next-line react-refresh/only-export-components
export function useUserOutletContext() {
  return useOutletContext<ContextType>();
}
