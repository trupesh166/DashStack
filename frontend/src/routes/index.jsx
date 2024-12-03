import { createBrowserRouter } from "react-router-dom";
import { AdminAsideData, StyleGuideAsideMenu } from "@/constants";
import {
  AdminDashBoard,
  Cards,
  CheckBox,
  DSButtons,
  DSIcons,
  FontFamily,
  Inputs,
  Modal,
  Tabs,
  FacilityManagement,
  Note,
  SecurityGuard,
  Login,
  Register,
  ForgetPassword,
  OTP,
  ResetPassword,
  Expense,
} from "@/pages/";
import { AuthLayouts, DashboardLayout } from "@/layouts";
import ProtectedRoute from "./ProtectedRoute";
import Income from "../pages/Admin/FinancialMaintenance/Income";
import { EditProfile } from "../pages/Admin/Dashboard/EditProfile";
import { Resident } from "../pages/Admin/ResidentManagement/Resident";
import { lazy } from "react";
import { elements } from "chart.js";

// Admin
const Announcement = lazy(() => import("../pages/Admin/Announcement/"));
const ComplaintCreate = lazy(() =>
  import("../pages/Admin/ComplaintTracking/CreateComplaint/")
);
const RequestTracking = lazy(() =>
  import("../pages/Admin/ComplaintTracking/RequestTracking/")
);
// const ResidentManagement = lazy(() => import("../pages/Admin/"));
// const ResidentManagement = lazy(() => import("../pages/Admin/"));
// const ResidentManagement = lazy(() => import("../pages/Admin/"));
// const ResidentManagement = lazy(() => import("../pages/Admin/"));
// const ResidentManagement = lazy(() => import("../pages/Admin/"));
// const ResidentManagement = lazy(() => import("../pages/Admin/"));
// const ResidentManagement = lazy(() => import("../pages/Admin/FinancialMaintenance/Note"));
// const ResidentManagement = lazy(() => import("../pages/Admin/FinancialMaintenance/Expanse"));
const VisitorLogs = lazy(() =>
  import("../pages/Admin/SecurityManagement/VisitorLogs")
);
const SecurityProtocols = lazy(() =>
  import("../pages/Admin/SecurityManagement/SecurityProtocols/")
);
const ResidentManagement = lazy(() =>
  import("../pages/Admin/ResidentManagement/")
);

const DashStackRoute = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/",
      children: [
        {
          element: "true",
        },
        {
          path: "member",
          element: <ProtectedRoute />,
          children: [
            {
              elements: <DashboardLayout />,
              children: [
                {
                  index: true,
                  element: "<AdminDashBoard />",
                },
              ],
            },
          ],
        },
        {
          path: "admin",
          element: <ProtectedRoute />,
          children: [
            {
              element: <DashboardLayout items={AdminAsideData} />,
              children: [
                {
                  index: true,
                  element: <AdminDashBoard />,
                },
                {
                  path: "profile",
                  element: <EditProfile />,
                },
                {
                  path: "residents",
                  element: <ResidentManagement />,
                },
                {
                  path: "resident-detail",
                  element: <Resident />,
                },
                {
                  path: "financial",
                  children: [
                    {
                      path: "income",
                      children: [
                        {
                          index: true,
                          element: <Income />,
                        },
                        {
                          path: "event-member-list",
                          element: <Income />,
                        },
                      ],
                    },
                    {
                      path: "expense",
                      element: <Expense />,
                    },
                    {
                      path: "note",
                      element: <Note />,
                    },
                  ],
                },
                {
                  path: "facility",
                  element: <FacilityManagement />,
                },
                {
                  path: "complaint",
                  children: [
                    {
                      path: "create",
                      element: <ComplaintCreate />,
                    },
                    {
                      path: "request",
                      element: <RequestTracking />,
                    },
                  ],
                },
                {
                  path: "security",
                  children: [
                    {
                      path: "visitors",
                      element: <VisitorLogs />,
                    },
                    {
                      path: "protocols",
                      element: <SecurityProtocols />,
                    },
                  ],
                },
                {
                  path: "guard",
                  element: <SecurityGuard />,
                },
                {
                  path: "announcement",
                  element: <Announcement />,
                },
              ],
            },
            {
              element: <ProtectedRoute />,
              children: [
                {
                  element: <AuthLayouts />,
                  children: [
                    {
                      path: "register",
                      element: <Register />,
                    },
                    {
                      path: "login",
                      element: <Login />,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          path: "security",
          element: <ProtectedRoute />,
          children: [
            {
              index: true,
              element: "<AdminDashBoard />",
            },
          ],
        },
        {
          /* Authentication Routes For Super Admin */
          element: <ProtectedRoute />,
          children: [
            {
              element: <AuthLayouts />,
              children: [
                {
                  path: "login",
                  element: <Login />,
                },
                {
                  path: "forgot-password",
                  element: <ForgetPassword />,
                },
                {
                  path: "otp",
                  element: <OTP />,
                },
                {
                  path: "reset-password",
                  element: <ResetPassword />,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      /* StyleGuide Routes */
      path: "style-guide",
      element: <DashboardLayout items={StyleGuideAsideMenu} />,
      children: [
        {
          index: true,
          element: <FontFamily />,
        },
        {
          path: "button",
          element: <DSButtons />,
        },
        {
          path: "input",
          element: <Inputs />,
        },
        {
          path: "checkbox",
          element: <CheckBox />,
        },
        {
          path: "modal",
          element: <Modal />,
        },
        {
          path: "table",
          element: "table",
        },
        {
          path: "icons",
          element: <DSIcons />,
        },
        {
          path: "tabs",
          element: <Tabs />,
        },
        {
          path: "tags",
          element: "tags",
        },
        {
          path: "cards",
          element: <Cards />,
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
