import Icons from "@/constants/Icons";
import { NavLink } from "react-router-dom";
import { authOne, authTwo } from "../assets/images";

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

const StyleGuideGetItem = (label, key, path, children) => {
  const wrappedLabel = path ? <NavLink to={`${path}`}>{label}</NavLink> : label;

  return {
    key,
    children,
    label: wrappedLabel,
  };
};

export const StyleGuideAsideMenu = [
  StyleGuideGetItem("Home", "/style-guide", "/style-guide"),
  StyleGuideGetItem("Input", "/style-guide/input", "/style-guide/input"),
  StyleGuideGetItem("Button", "/style-guide/button", "/style-guide/button"),
  StyleGuideGetItem(
    "CheckBox",
    "/style-guide/checkBox",
    "/style-guide/checkBox"
  ),
  StyleGuideGetItem("Icons", "/style-guide/icons", "/style-guide/icons"),
  StyleGuideGetItem("Modal", "/style-guide/modal", "/style-guide/modal"),
  StyleGuideGetItem("Tab", "/style-guide/tabs", "/style-guide/tabs"),
  StyleGuideGetItem("Cards", "/style-guide/cards", "/style-guide/cards"),
];

export const MemberCardData = [
  {
    id: 1,
    title: "Arlene McCoy",
    email: "arlenemccoy@gmail.com",
    phone: "99130 52221",
    age: 22,
    gender: "Male",
    relation: "Brother",
  },
  {
    id: 2,
    title: "Arlene McCoy",
    email: "arlenemccoy@gmail.com",
    phone: "99130 52221",
    age: 22,
    gender: "Male",
    relation: "Brother",
  },
  {
    id: 3,
    title: "Arlene McCoy",
    email: "arlenemccoy@gmail.com",
    phone: "99130 52221",
    age: 22,
    gender: "Male",
    relation: "Brother",
  },
];

export const AuthSliderData = [
  {
    id: 1,
    title: "Connect, Collaborate, and Control - Society Management Simplified",
    image: authOne,
  },
  {
    id: 2,
    title: "Your Space, Your Place: Society Management Made Simple",
    image: authTwo,
  },
];
