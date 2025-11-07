import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <Navigate to="/login" />;

  if (role && user.role !== role) {
    return <h2>Forbidden: You don't have permission to access this page</h2>;
  }

  return children;
};

export default ProtectedRoute;
