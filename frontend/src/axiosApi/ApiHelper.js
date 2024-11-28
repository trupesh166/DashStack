import { axiosApi } from "@/axiosApi";

async function request(method, url, data) {
  try {
    const response = await axiosApi[method](`${url}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error in ${method.toUpperCase()} request to ${url}:`, error);
    throw error;
  }
}

/* Authentication */
export const register = (data) =>
  request("post", "/society-handler/create", data);
export const loginUser = (data) => request("post", "/user/login", data);
export const forgotPassword = (data) =>
  request("post", "/auth/forgot-password", data);
export const verifyOtp = (data) => request("post", "/auth/verify-otp", data);
export const resetPassword = (data) =>
  request("post", "/auth/reset-password", data);

/* Society  */
export const createSociety = (data) => request("post", "/society/create", data);
export const getSociety = () => request("get", "/society/list");

/* User */
export const userRegistration = (data) =>
  request("post", "/auth/user/insertUser", data);
export const getUser = () => request("get", "/member/671ac29415a25bbaedeb52ca");
export const editUser = () => request("get", "auth/user/edit-user/");
export const vacateUser = () => request("get", "auth/user/vacate-user/");

/* Maintenance Management */
export const createMaintenance = (data) =>
  request("post", "/maintain/create", data);
export const listMaintenance = () => request("get", `/maintain-detail/member/`);
export const dueMaintenance = () => request("get", `/maintain-detail/due/`);
export const pendingMaintenance = () =>
  request("get", `/maintain-detail/pending/`);
export const completedMaintenance = () =>
  request("get", `/maintain-detail/complete/`);
export const getMaintenanceDetailsByMember = () =>
  request("get", `/maintain-detail/list/`);

// // Unit Management
export const createUnit = (data) => request("post", "/unit/create", data);
// export const listUnit = (wingId) => request("get", `/unit/list/${wingId}`);

// // Wing Management
// export const listWing = (societyId) =>
//   request("get", `/wing/list/${societyId}`);

// // Member Management
// export const listMember = () => request("get", `/auth/user/getUser`);
// export const createMember = (data) =>
//   request("post", "/member/createMember", data);
// export const getMemberById = (memberId) =>
//   request("get", `/member/list/${memberId}`);
// export const listByUnit = (unitId) =>
//   request("get", `/member/listbyunit/${unitId}`);

// // Event Management
// export const createEvent = (data) => request("post", "/event/create", data);
// export const getEvents = (id) => request("get", `/event/${id}`);

// // Expense Management
// export const createExpense = (data) => request("post", "/expanse/create", data);
// export const listExpense = (societyId) =>
//   request("get", `/expanse/list/${societyId}`);
// export const updateExpense = (expanseId, data) =>
//   request("put", `/expanse/update/${expanseId}`, data);
// export const deleteExpense = (expanseId) =>
//   request("delete", `/expanse/delete/${expanseId}`);

// // Notes Management
// export const createNotes = (data) =>
//   request("post", "/expanseNote/create", data);
// export const listNotes = (societyId) =>
//   request("get", `/expanseNote/list/${societyId}`);
// export const updateNote = (societyId, data) =>
//   request("put", `/expanseNote/update/${societyId}`, data);
// export const deleteNote = (id) =>
//   request("delete", `/expanseNote/delete/${id}`);

// // Facility Management
// export const createFacility = (data) =>
//   request("post", "/facility/addfacility", data);
// export const listFacility = (societyId) =>
//   request("get", `/facility/getfacility/${societyId}`);
// export const editFacility = (id, data) =>
//   request("put", `/facility/updatefacility/${id}`, data);

// // Complaint Management
// export const createComplaint = (data) =>
//   request("post", "/complain/create", data);
// export const listComplaint = (data) => request("post", "/complain/list", data);
// export const updateComplaint = (id, data) =>
//   request("put", `/complain/update/${id}`, data);
// export const deleteComplaint = (id) =>
//   request("delete", `/complain/delete/${id}`);

// // Security Protocol Management
// export const createSecurityProtocol = (data) =>
//   request("post", "/securityprotocol/createprotocol", data);
// export const listSecurityProtocol = (societyId) =>
//   request("get", `/securityprotocol/getprotocol/${societyId}`);
// export const updateSecurityProtocol = (id, data) =>
//   request("put", `/securityprotocol/updatesecurityprotocol/${id}`, data);
// export const deleteSecurityProtocol = (id) =>
//   request("delete", `/securityprotocol/deleteprotocol/${id}`);

// Visitor Management
export const listVisitor = (societyId) =>
  request("get", `/visitor/getvisitor/${societyId}`);

// Announcement Management
export const createAnnouncement = (data) =>
  request("post", "/announcement/create", data);
export const listAnnouncement = (societyId) =>
  request("get", `/announcement/list/${societyId}`);
export const ViewAnnouncement = (societyId) =>
  request("get", `/announcement/listbyid/${societyId}`);
export const updateAnnouncement = (id, data) =>
  request("put", `/announcement/update/${id}`, data);
export const deleteAnnouncement = (id) =>
  request("delete", `/announcement/delete/${id}`);

// // Security Guard Management
// export const createGuard = (data) =>
//   request("post", "/security/createsecurity", data);
// export const listGuard = (societyId) =>
//   request("get", `/security/getsecurity/${societyId}`);
// export const editGuard = (id, data) =>
//   request("put", `/security/updatesecurity/${id}`, data);
// export const deleteGuard = (id) =>
//   request("delete", `/security/deletesecurity/${id}`);

// Important Number Management
export const createImportantNumber = (data) =>
  request("post", "/workernumber/create", data);
export const listImportantNumber = (societyId) =>
  request("get", `/workernumber/list/${societyId}`);
export const editImportantNumber = (id, data) =>
  request("put", `/workernumber/updateimportantnumber/${id}`, data);
export const deleteImportantNumber = (id) =>
  request("delete", `/workernumber/delete/${id}`);

// // Image Management
// export const imageDetails = (data) => request("post", "/image-details", data);
