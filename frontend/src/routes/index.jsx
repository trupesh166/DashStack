import { createBrowserRouter } from "react-router-dom";
import {
  AdminAsideData,
  ResidentAsidData,
  SecurityAsideData,
  StyleGuideAsideMenu,
} from "@/constants";
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

  /* Resident Panel */
  ResidentDashboard,
  PersonalDetail,
  ServiceAndComplaint,
  EventsParticipation,
  AccessForums,
  Polls,
  CommunitiesDiscussion,
  MaintenanceInvoices,
  ViewMaintenanceInvoices,
  OtherIncomeInvoice,
  ViewOtherIncomeInvoice,
  SecurityProtocolsResident,

  /* Security Panel */
  VisitorTracking,
  EmergencyManagement,
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
                  key: "/admin",
                  path: "profile",
                  element: <EditProfile />,
                },
                {
                  path: "residents",
                  children: [
                    {
                      index: true,
                      element: <ResidentManagement />,
                    },
                    {
                      path: "resident-detail",
                      element: <Resident />,
                    },
                  ],
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
          ],
        },
        {
          path: "resident",
          element: <ProtectedRoute />,
          children: [
            {
              element: <DashboardLayout items={ResidentAsidData} />,
              children: [
                {
                  index: true,
                  element: <ResidentDashboard />,
                },
                {
                  path: "personal-detail",
                  element: <PersonalDetail />,
                },
                {
                  path: "service",
                  element: <ServiceAndComplaint />,
                },
                {
                  path: "events",
                  element: <EventsParticipation />,
                },
                {
                  path: "community",
                  children: [
                    {
                      path: "access-forums",
                      element: <AccessForums />,
                    },
                    {
                      path: "polls",
                      element: <Polls />,
                    },
                    {
                      path: "communities-discussion",
                      element: <CommunitiesDiscussion />,
                    },
                  ],
                },
                {
                  path: "payment",
                  children: [
                    {
                      path: "maintenance-invoices",
                      children: [
                        {
                          index: true,
                          element: <MaintenanceInvoices />,
                        },
                        {
                          path: "view-invoices",
                          element: <ViewMaintenanceInvoices />,
                        },
                      ],
                    },
                    {
                      path: "other-income-invoice",
                      children: [
                        {
                          index: true,
                          element: <OtherIncomeInvoice />,
                        },
                        {
                          path: "view-invoices",
                          element: <ViewOtherIncomeInvoice />,
                        },
                      ],
                    },
                  ],
                },
                {
                  path: "security-protocols",
                  element: <SecurityProtocolsResident />,
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
              element: <DashboardLayout items={SecurityAsideData} />,
              children: [
                {
                  index: true,
                  element: <VisitorTracking />,
                },
                {
                  path: "emergency",
                  element: <EmergencyManagement />,
                },
              ],
            },
          ],
        },
        {
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
          ],
        },
        {
          path: "*",
          element: <>404 - Page Not Found</>,
        },
      ],
    },
  ],
  {
    /* Base URL */
    basename: "/",
  }
);

export default DashStackRoute;
