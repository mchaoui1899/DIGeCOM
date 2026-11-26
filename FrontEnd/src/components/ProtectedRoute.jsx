import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {

  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");
  console.log("Checking... token:", token, "userRole:", userRole, "need:", role);

  // user not connected
  if (!token) {
    return <Navigate to="/" />;
  }

  // wrong role
  if (role && role !== userRole) {
    return <Navigate to="/" />;
  }

  return children;


}

export default ProtectedRoute;


