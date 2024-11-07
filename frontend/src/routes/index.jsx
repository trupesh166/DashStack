import { createBrowserRouter, Outlet } from "react-router-dom";
import { AdminAsideData } from "@/constants";
import { AdminDashBoard } from "@/pages/";
import { AuthLayouts, DashboardLayout } from "@/layouts";
import MaintenanceCard from "../components/DSCards/MaintenanceCard";

const DashStackRoute = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/",
      children: [
        {
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: "<AdminDashBoard />",
            },
          ],
        },
        {
          path: "admin",
          children: [
            {
              element: <DashboardLayout items={AdminAsideData} />,
              children: [{ index: true, element: <AdminDashBoard /> }],
            },
            {
              path: "register",
              element: "register user",
            },
          ],
        },
        {
          path: "security",
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: "<AdminDashBoard />",
            },
          ],
        },
        {
          /* Authentication Routes For Super Admin */
          element: <AuthLayouts />,
          children: [
            {
              path: "login",
              element: "Login",
            },
            {
              path: "forgot-password",
              element: "ForgotPassword",
            },
            {
              path: "otp",
              element: "Otp",
            },
            {
              path: "reset-password",
              element: "reset-password",
            },
          ],
        },
      ],
    },
    {
      /* StyleGuide Routes */
      path: "StyleGuide",
      // element: <StyleGuideLayout items={StyleGuideAsideMenu} />,
      element: <Outlet />,
      children: [
        {
          index: true,
          element: "Home",
        },
        {
          path: "button",
          element: "button",
        },
        {
          path: "input",
          element: "input",
        },
        {
          path: "checkbox",
          element: "checkbox",
        },
        {
          path: "modal",
          element: "modal",
        },
        {
          path: "table",
          element: "table",
        },
        {
          path: "icons",
          element: "icons",
        },
        {
          path: "tabs",
          element: "tabs",
        },
        {
          path: "tags",
          element: "tags",
        },
        {
          path: "cards",
          element: "cards",
        },
      ],
    },
    {
      /* Default Route (404) */
      path: "*",
      element: <>404 - Page Not Found</>,
    },
  ],
  {
    /* Base URL */
    basename: "/",
  }
);

export default DashStackRoute;
