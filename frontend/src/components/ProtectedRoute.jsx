import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();

  if (!user) {
    toast.warning("Please login to continue");

    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return children;
}

export default ProtectedRoute;