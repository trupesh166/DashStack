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
  SecurityProtocols,
  VisitorLogs,
  Login,
  Register,
  ResidentManagement,
  ComplaintCreate,
  RequestTracking,
  ForgetPassword,
  OTP,
  ResetPassword,
} from "@/pages/";
import { AuthLayouts, DashboardLayout } from "@/layouts";
import { Announcement, Expense } from "../pages/Admin";
import ProtectedRoute from "./ProtectedRoute";
import Income from "../pages/Admin/FinancialMaintenance/Income";
import { EditProfile } from "../pages/Admin/Dashboard/EditProfile";

const DashStackRoute = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/",
      children: [
        {
          element: (
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              index: true,
              element: "<AdminDashBoard />",
            },
          ],
        },
        {
          path: "admin",
          // element: <ProtectedRoute />,
          children: [
            {
              element: <DashboardLayout items={AdminAsideData} />,
              children: [
                {
                  index: true,
                  element: <AdminDashBoard />,
                },
                {
                  path: "editProfile",
                  element: <EditProfile />,
                },
                {
                  path: "residents",
                  element: <ResidentManagement />,
                },
                {
                  path: "financial",
                  children: [
                    {
                      path: "income",
                      element: <Income />,
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
