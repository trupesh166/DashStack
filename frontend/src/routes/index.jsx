import { createBrowserRouter } from "react-router-dom";
import { AdminAsideData, StyleGuideAsideMenu } from "@/constants";
import { AdminDashBoard } from "@/pages/";
import { AuthLayouts, DashboardLayout } from "@/layouts";
import {
  CheckBox,
  DSButtons,
  DSIcons,
  FontFamily,
  Inputs,
  Modal,
  Tabs,
} from "../pages/Styleguide";
import { Login, Register } from "../pages/Auth";

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
              children: [
                {
                  index: true,
                  element: <AdminDashBoard />,
                },
                {
                  path: "residents",
                  element: <AdminDashBoard />,
                },
                {
                  path: "financial",
                  children: [
                    {
                      path: "income",
                      element: <AdminDashBoard />,
                    },
                    {
                      path: "expense",
                      element: <AdminDashBoard />,
                    },
                    {
                      path: "note",
                      element: <AdminDashBoard />,
                    },
                  ],
                },
                {
                  path: "facility",
                  element: <AdminDashBoard />,
                },
                {
                  path: "complaint",
                  children: [
                    {
                      path: "create",
                      element: <AdminDashBoard />,
                    },
                    {
                      path: "request",
                      element: <AdminDashBoard />,
                    },
                  ],
                },
                {
                  path: "security",
                  children: [
                    {
                      path: "visitors",
                      element: <AdminDashBoard />,
                    },
                    {
                      path: "protocols",
                      element: <AdminDashBoard />,
                    },
                  ],
                },
                {
                  path: "guard",
                  element: <AdminDashBoard />,
                },
                {
                  path: "announcement",
                  element: <AdminDashBoard />,
                },
              ],
            },
            {
              element: <AuthLayouts />,
              children: [{ path: "register", element: <Register /> }],
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
