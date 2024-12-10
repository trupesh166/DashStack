# DeshStack

DeshStack is a comprehensive Society Management System built using the MERN stack. The platform is designed to simplify and automate various operations in residential societies, including member management, maintenance tracking, visitor monitoring, and security operations. With role-based access control, DeshStack ensures privacy and seamless workflows for all users.

---

## Features

### Core Modules

**Member Management**:
- Add, edit, and remove society members.
- Maintain detailed member profiles, including personal and contact information.

**Maintenance Management**:
- Dynamic maintenance charges based on unit specifications.
- View and track payments, including due dates and status.

**Visitor Tracking**:
- Real-time tracking of visitor entries and exits.
- Integration with security guard modules for seamless visitor management.

**Security Guard Management**:
- Manage security guard profiles and shift schedules.
- Facilitate communication between security staff and society members.

**Role-Based Access Control**:
- Different roles for **Admin**, **Members**, **Security Guards**, and **Visitors**.
- Role-specific dashboards and features, ensuring tailored user experiences and data access.

### Additional Features

**Dynamic Wing and Unit Creation**:
- Create and manage wings and units based on the society's structure.

**Member Requests and Complaints**:
- Members can raise maintenance requests or complaints.
- Admins and concerned departments can view and address requests efficiently.

---

## Tech Stack

- **Frontend**: React.js, Ant Design, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---

## Installation

### 1. Clone the repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/trupesh166/DashStack.git
```

### 2. Set up the Backend

Open a terminal and navigate to the server directory:

```bash
cd server
npm install
npm start
```

- Create a .env file in the server folder and add the necessary environment variables (e.g., database connection string, server port).

### 3. Set up the Frontend

Open a new terminal and navigate to the client directory:

```bash
cd client
npm install
npm start
```

- The frontend will be available at http://localhost:5173.
- The backend API will be running at http://localhost:5000.

---

## Live URLs

- **Client-side live URL**: [DeshStack Client](https://smc-dashstack.web.app/login)
- **Server-side live URL**: [DeshStack Server](https://scoietymanagement-server.onrender.com)

---

## Notes

- This project supports role-based access, ensuring that users have the correct permissions for their tasks.

---
