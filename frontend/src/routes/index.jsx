import { createBrowserRouter, Outlet } from "react-router-dom";
import { AdminAsideData } from "@/constants";
import { AdminDashBoard } from "@/pages/";
import { AuthLayouts, DashboardLayout } from "@/layouts";

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
              children: [{ path: "register", element: "register user" }],
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
