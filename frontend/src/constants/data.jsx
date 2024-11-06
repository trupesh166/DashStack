import Icons from "@/constants/Icons";
import { NavLink } from "react-router-dom";

const getItem = (label, key, icon, path, children) => {
  const wrappedLabel = path ? <NavLink to={`${path}`}>{label}</NavLink> : label;

  return {
    key,
    icon,
    children,
    label: wrappedLabel,
  };
};

export const AdminAsideData = [
  getItem("Dashboard", "/admin", Icons.Dashboard, "/admin"),
  getItem(
    "Resident Management",
    "/admin/residents",
    Icons.Money,
    "/admin/residents"
  ),
  getItem(
    "Financial Management",
    "financial_management",
    Icons.DollarSquare,
    null,
    [
      getItem(
        "Income",
        "/admin/financial/income",
        null,
        "/admin/financial/income"
      ),
      getItem(
        "Expense",
        "/admin/financial/expense",
        null,
        "/admin/financial/expense"
      ),
      getItem("Note", "/admin/financial/note", null, "/admin/financial/note"),
    ]
  ),
  getItem(
    "Facility Management",
    "/admin/facility",
    Icons.Building,
    "/admin/facility"
  ),
  getItem("Complaint Tracking", "complaint_tracking", Icons.SmsTracking, null, [
    getItem(
      "Create Complaint",
      "/admin/complaint/create",
      null,
      "/admin/complaint/create"
    ),
    getItem(
      "Request Tracking",
      "/admin/complaint/request",
      null,
      "/admin/complaint/request"
    ),
  ]),
  getItem(
    "Security Management",
    "security_management",
    Icons.ShieldSecurity,
    null,
    [
      getItem(
        "Visitor Logs",
        "/admin/security/visitors",
        null,
        "/admin/security/visitors"
      ),
      getItem(
        "Security Protocols",
        "/admin/security/protocols",
        null,
        "/admin/security/protocols"
      ),
    ]
  ),
  getItem(
    "Security Guard",
    "/admin/guard",
    Icons.SecurityGuard,
    "/admin/guard"
  ),
  getItem(
    "Announcement",
    "/admin/announcement",
    Icons.Announcement,
    "/admin/announcement"
  ),
];

export const StyleGuideAsideMenu = [
  getItem("Dashboard", "/admin", Icons.Dashboard, "/admin"),
  getItem(
    "Resident Management",
    "/admin/residents",
    Icons.Money,
    "/admin/residents"
  ),
  getItem(
    "Financial Management",
    "financial_management",
    Icons.DollarSquare,
    null,
    [
      getItem(
        "Income",
        "/admin/financial/income",
        null,
        "/admin/financial/income"
      ),
      getItem(
        "Expense",
        "/admin/financial/expense",
        null,
        "/admin/financial/expense"
      ),
      getItem("Note", "/admin/financial/note", null, "/admin/financial/note"),
    ]
  ),
  getItem(
    "Facility Management",
    "/admin/facility",
    Icons.Building,
    "/admin/facility"
  ),
  getItem("Complaint Tracking", "complaint_tracking", Icons.SmsTracking, null, [
    getItem(
      "Create Complaint",
      "/admin/complaint/create",
      null,
      "/admin/complaint/create"
    ),
    getItem(
      "Request Tracking",
      "/admin/complaint/request",
      null,
      "/admin/complaint/request"
    ),
  ]),
  getItem(
    "Security Management",
    "security_management",
    Icons.ShieldSecurity,
    null,
    [
      getItem(
        "Visitor Logs",
        "/admin/security/visitors",
        null,
        "/admin/security/visitors"
      ),
      getItem(
        "Security Protocols",
        "/admin/security/protocols",
        null,
        "/admin/security/protocols"
      ),
    ]
  ),
  getItem(
    "Security Guard",
    "/admin/guard",
    Icons.SecurityGuard,
    "/admin/guard"
  ),
  getItem(
    "Announcement",
    "/admin/announcement",
    Icons.Announcement,
    "/admin/announcement"
  ),
];
