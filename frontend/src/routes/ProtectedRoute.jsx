import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UseDecodeToken from "../hook/UseDecodeToken";
import { DSLoader } from "../components/DSLoader";

function ProtectedRoute() {
  // const { token } = UseDecodeToken();
  // const [isAuthorized, setIsAuthorized] = useState(false);
  // const [loading, setLoading] = useState(true);

  // Define the roles that are allowed to access the route
  // const requiredRoles = ["Chairman", "resident", "security"];

  // useEffect(() => {
  //   if (token) {
  //     const role = token.role;
  //     if (requiredRoles.includes(role)) {
  //       setIsAuthorized(true);
  //     } else {
  //       setIsAuthorized(false);
  //     }
  //     setLoading(false);
  //   } else {
  //     setLoading(false);
  //   }
  // }, [token]);

  // if (loading) {
  //   return <DSLoader />;
  // }

  // if (!token) {
  //   return (
  //     <>
  //       <Navigate to="/login" replace />
  //       <Outlet />
  //     </>
  //   );
  // }

  // if (!isAuthorized) {
  //   return (
  //     <>
  //       <Navigate to="/" replace />;
  //       <Outlet />
  //     </>
  //   );
  // }
  
  return <Outlet />;
}

export default ProtectedRoute;
