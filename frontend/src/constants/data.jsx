import Icons from "@/constants/Icons";
import { NavLink } from "react-router-dom";

const getItem = (label, key, icon, path, children, type) => {
  const wrappedLabel = path ? <NavLink to={path}>{label}</NavLink> : label;
  return {
    key,
    icon,
    children,
    label: wrappedLabel,
    type,
  };
};

export const AdminAsideData = [
  getItem("Dashboard", "/admin", Icons.NotificationBall, "/admin"),
  getItem(
    "Resident Management",
    "resident_management",
    Icons.NotificationBall,
    "/admin/residents"
  ),
  getItem(
    "Financial Management",
    "financial_management",
    Icons.NotificationBall,
    null,
    [
      getItem("Income", "income", null, "/admin/financial/income"),
      getItem("Expense", "expense", null, "/admin/financial/expense"),
      getItem("Note", "note", null, "/admin/financial/note"),
    ]
  ),
  getItem(
    "Facility Management",
    "facility_management",
    Icons.NotificationBall,
    "/admin/facility"
  ),
  getItem(
    "Complaint Tracking",
    "complaint_tracking",
    Icons.NotificationBall,
    null,
    [
      getItem("Create Complaint", "income", null, "/admin/financial/income"),
      getItem("Request Tracking", "expense", null, "/admin/financial/expense"),
    ]
  ),
  getItem(
    "Security Management",
    "security_management",
    Icons.NotificationBall,
    null,
    [
      getItem("Visitor Logs", "income", null, "/admin/financial/income"),
      getItem(
        "Security Protocols",
        "expense",
        null,
        "/admin/financial/expense"
      ),
    ]
  ),
  getItem(
    "Security Guard",
    "security_guard",
    Icons.NotificationBall,
    "/admin/guard"
  ),
  getItem(
    "Announcement",
    "announcement",
    Icons.NotificationBall,
    "/admin/announcement"
  ),
];
