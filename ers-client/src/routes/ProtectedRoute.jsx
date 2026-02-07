import { Navigate } from "react-router-dom";
import { useAuth } from "../contex/useAuth";

function ProtectedRoute({ children, allowedRole }) {
  const { user } = useAuth();
  if (!user || !user.role) {
    return <Navigate to="/login" replace />;
  }
  if (user.role.toLowerCase() !== allowedRole.toLowerCase()) {
    return <Navigate to={`/${user.role}/home`} replace />;
  }
  return children;
}
export default ProtectedRoute;
