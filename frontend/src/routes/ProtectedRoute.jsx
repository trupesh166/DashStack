import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import UseDecodeToken from "../hook/UseDecodeToken";
import { useEffect } from "react";
import toast from "react-hot-toast";

const adminRoutes = [
  "/admin",
  "/admin/residents",
  "/admin/financial",
  "/admin/facility",
  "/admin/complaint",
  "/admin/security",
  "/admin/guard",
  "/admin/announcement",
];
const securityRoutes = ["/security"];
const authRestrictedRoutes = [
  "/admin/login",
  "/admin/register",
  "/login",
  "/forgot-password",
  "/otp",
  "/reset-password",
];

export default function ProtectedRoute() {
  const navigate = useNavigate();
  const location = useLocation();

  const isAdminRoute = adminRoutes.some((route) =>
    location.pathname.startsWith(route)
  );
  const isSecurityRoute = securityRoutes.some((route) =>
    location.pathname.startsWith(route)
  );
  const isAuthRestrictedRoute = authRestrictedRoutes.includes(
    location.pathname
  );

  const { token } = UseDecodeToken();

  // useEffect(() => {
  //   console.log(token);
  //   if (!token) {
  //     if (isAdminRoute) {
  //       navigate("/admin/login");
  //       toast.error("Admin Token Not Found");
  //     } else {
  //       navigate("/login");
  //       toast.error("Not Found");
  //     }
  //   } else {
  //     if (isAuthRestrictedRoute) {
  //       switch (token.role) {
  //         case "Chairman":
  //           navigate("/admin");
  //         case "Security":
  //           navigate("/security");
  //         case "Member":
  //           navigate("/member");
  //         default:
  //           navigate("/");
  //       }
  //     }
  //   }
  // }, [location.pathname]);

  // Allow access to appropriate routes based on role
  return <Outlet />;
}
