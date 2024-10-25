import Icons from "@/constants/Icons";

function getItem(label, key, icon, path) {
  return {
    key,
    label,
    icon,
    path,
  };
}

export const AdminAsideData = [
  getItem("Dashboard", "dashboard", Icons.NotificationBall, "/dashboard"),
  getItem(
    "Resident Management",
    "resident_management",
    Icons.NotificationBall,
    "/residents"
  ),
  getItem(
    "Financial Management",
    "financial_management",
    Icons.NotificationBall,
    "/financial",
    [
      getItem("Income", "income", null, "/financial/income"),
      getItem("Expense", "expense", null, "/financial/expense"),
      getItem("Note", "note", null, "/financial/note"),
    ]
  ),
  getItem(
    "Facility Management",
    "facility_management",
    Icons.NotificationBall,
    "/facility"
  ),
  getItem(
    "Complaint Tracking",
    "complaint_tracking",
    Icons.NotificationBall,
    "/complaints"
  ),
  getItem(
    "Security Management",
    "security_management",
    Icons.NotificationBall,
    "/security"
  ),
  getItem("Security Guard", "security_guard", Icons.NotificationBall, "/guard"),
  getItem(
    "Announcement",
    "announcement",
    Icons.NotificationBall,
    "/announcement"
  ),
];
