import { axiosApi } from "@/axiosApi";

class ApiHelper {
  async request(method, url, data) {
    try {
      const response = await axiosApi[method](`${this.baseUrl}${url}`, data);
      return response.data;
    } catch (error) {
      console.error(
        `Error in ${method.toUpperCase()} request to ${url}:`,
        error
      );
      throw error;
    }
  }

  // User Management
  async loginUser(data) {
    return this.request("post", "/user/login", data);
  }

  // Society Management
  async listSociety() {
    return this.request("get", "/society/list");
  }

  async createSociety(data) {
    return this.request("post", "/society/create", data);
  }

  async createChairman(data) {
    return this.request("post", "/society-handler/create", data);
  }

  // Unit Management
  async createUnit(data) {
    return this.request("post", "/unit/create", data);
  }

  async listUnit(wingId) {
    return this.request("get", `/unit/list/${wingId}`);
  }

  // Wing Management
  async listWing(societyId) {
    return this.request("get", `/wing/list/${societyId}`);
  }

  // Member Management
  async listMember(societyId) {
    return this.request("get", `/member/${societyId}`);
  }

  async createMember(data) {
    return this.request("post", "/member/createMember", data);
  }

  async getMemberById(memberId) {
    return this.request("get", `/member/list/${memberId}`);
  }

  async listByUnit(unitId) {
    return this.request("get", `/member/listbyunit/${unitId}`);
  }

  // Event Management
  async createEvent(data) {
    return this.request("post", "/event/create", data);
  }

  async getEvents(id) {
    return this.request("get", `/event/${id}`);
  }

  // Maintenance Management
  async createMaintenance(data) {
    return this.request("post", "/maintain/create", data);
  }

  async listMaintenance(societyId) {
    return this.request("get", `/maintain-detail/member/${societyId}`);
  }

  async dueMaintenance(memberId) {
    return this.request("get", `/maintain-detail/due/${memberId}`);
  }

  async pendingMaintenance(memberId) {
    return this.request("get", `/maintain-detail/pending/${memberId}`);
  }

  async completedMaintenance(memberId) {
    return this.request("get", `/maintain-detail/complete/${memberId}`);
  }

  async getMaintenanceDetailsByMember(id) {
    return this.request("get", `/maintain-detail/list/${id}`);
  }

  // Expense Management
  async createExpense(data) {
    return this.request("post", "/expanse/create", data);
  }

  async listExpense(societyId) {
    return this.request("get", `/expanse/list/${societyId}`);
  }

  async updateExpense(expanseId, data) {
    return this.request("put", `/expanse/update/${expanseId}`, data);
  }

  async deleteExpense(expanseId) {
    return this.request("delete", `/expanse/delete/${expanseId}`);
  }

  // Notes Management
  async createNotes(data) {
    return this.request("post", "/expanseNote/create", data);
  }

  async listNotes(societyId) {
    return this.request("get", `/expanseNote/list/${societyId}`);
  }

  async updateNote(societyId, data) {
    return this.request("put", `/expanseNote/update/${societyId}`, data);
  }

  async deleteNote(id) {
    return this.request("delete", `/expanseNote/delete/${id}`);
  }

  // Facility Management
  async createFacility(data) {
    return this.request("post", "/facility/addfacility", data);
  }

  async listFacility(societyId) {
    return this.request("get", `/facility/getfacility/${societyId}`);
  }

  async editFacility(id, data) {
    return this.request("put", `/facility/updatefacility/${id}`, data);
  }

  // Complaint Management
  async createComplaint(data) {
    return this.request("post", "/complain/create", data);
  }

  async listComplaint(data) {
    return this.request("post", "/complain/list", data);
  }

  async updateComplaint(id, data) {
    return this.request("put", `/complain/update/${id}`, data);
  }

  async deleteComplaint(id) {
    return this.request("delete", `/complain/delete/${id}`);
  }

  // Security Protocol Management
  async createSecurityProtocol(data) {
    return this.request("post", "/securityprotocol/createprotocol", data);
  }

  async listSecurityProtocol(societyId) {
    return this.request("get", `/securityprotocol/getprotocol/${societyId}`);
  }

  async updateSecurityProtocol(id, data) {
    return this.request(
      "put",
      `/securityprotocol/updatesecurityprotocol/${id}`,
      data
    );
  }

  async deleteSecurityProtocol(id) {
    return this.request("delete", `/securityprotocol/deleteprotocol/${id}`);
  }

  // Visitor Management
  async listVisitor(societyId) {
    return this.request("get", `/visitor/getvisitor/${societyId}`);
  }

  // Announcement Management
  async createAnnouncement(data) {
    return this.request("post", "/announcement/create", data);
  }

  async listAnnouncement(societyId) {
    return this.request("get", `/announcement/list/${societyId}`);
  }

  async updateAnnouncement(id, data) {
    return this.request("put", `/announcement/update/${id}`, data);
  }

  async deleteAnnouncement(id) {
    return this.request("delete", `/announcement/delete/${id}`);
  }

  // Security Guard Management
  async createGuard(data) {
    return this.request("post", "/security/createsecurity", data);
  }

  async listGuard(societyId) {
    return this.request("get", `/security/getsecurity/${societyId}`);
  }

  async editGuard(id, data) {
    return this.request("put", `/security/updatesecurity/${id}`, data);
  }

  async deleteGuard(id) {
    return this.request("delete", `/security/deletesecurity/${id}`);
  }

  // Image Management
  async imageDetails(data) {
    return this.request("post", "/image-details", data);
  }
}

// Export instance of ApiHelper
const apiHelper = new ApiHelper();
export default apiHelper;
