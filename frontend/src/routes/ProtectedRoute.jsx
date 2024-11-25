import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function ProtectedRoute() {
  // const [isAuthenticated, setIsAuthenticated] = useState(null);
  // const [userRole, setUserRole] = useState(null);

  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   const checkAuth = () => {
  //     const token = localStorage.getItem("_token");

  //     if (!token) {
  //       setIsAuthenticated(false);
  //       return;
  //     }

  //     try {
  //       const decodedToken = jwtDecode(token);
  //       const { userData } = decodedToken;
  //       setUserRole(userData.role);
  //       setIsAuthenticated(true);
  //     } catch (error) {
  //       toast.error("Error decoding token:", error.message);
  //       setIsAuthenticated(false);
  //       localStorage.removeItem("_token");
  //     }
  //   };

  //   checkAuth();
  // }, [location]);

  // useEffect(() => {
  //   if (isAuthenticated === true && userRole) {
  //     const currentPath = location.pathname;

  //     const adminRoutes = [
  //       "/admin",
  //       "/admin/residents",
  //       "/admin/financial/income",
  //       "/admin/financial/expense",
  //       "/admin/financial/note",
  //       "/admin/facility",
  //       "/admin/complaint/create",
  //       "/admin/complaint/request",
  //       "/admin/security/visitors",
  //       "/admin/security/protocols",
  //       "/admin/guard",
  //       "/admin/announcement",
  //     ];

  //     const userRoutes = ["/"];
  //     const securityRoutes = ["/security"];
  //     const authRestrictedRoutes = [
  //       "/login",
  //       "/admin/login",
  //       "/admin/register",
  //     ];

  //     // Redirect to the appropriate dashboard if accessing auth routes while authenticated
  //     if (authRestrictedRoutes.includes(currentPath)) {
  //       switch (userRole) {
  //         case "user":
  //           navigate("/");
  //           break;
  //         case "admin":
  //           navigate("/admin");
  //           break;
  //         case "security":
  //           navigate("/security");
  //           break;
  //       }
  //       return;
  //     }

  //     switch (userRole) {
  //       case "user":
  //         if (!userRoutes.includes(currentPath)) {
  //           navigate("/");
  //         }
  //         break;
  //       case "admin":
  //         if (!adminRoutes.includes(currentPath)) {
  //           navigate("/admin");
  //         }
  //         break;
  //       case "security":
  //         if (!securityRoutes.includes(currentPath)) {
  //           navigate("/security");
  //         }
  //         break;
  //     }
  //   }
  // }, [isAuthenticated, userRole, navigate, location]);

  // if (isAuthenticated === null) {
  //   return null;
  // }

  // if (!isAuthenticated) {
  //   if (location.pathname.startsWith("/admin")) {
  //     return <Navigate to="/admin/login" replace />;
  //   } else {
  //     return <Navigate to="/login" replace />;
  //   }
  // }

  return <Outlet />;
}
