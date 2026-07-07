# 🚀 ERP Management System (MERN Stack)

A modern, responsive **Enterprise Resource Planning (ERP)** application built with the **MERN Stack** to simplify employee management, attendance tracking, leave management, payroll processing, and department administration.

Designed with a clean Material UI interface, secure REST APIs, and scalable architecture.

---

## ✨ Features

### 🔐 Authentication

* User Registration
* Secure Login
* JWT Authentication
* Protected Routes
* Role-Based Access Control

---

### 👨‍💼 Employee Management

* Add Employee
* Update Employee
* Delete Employee
* Employee Profile
* Employee Details Page
* Search Employees
* Department Filter
* Status Filter
* Sorting
* Pagination
* CSV Export
* PDF Export
* Responsive Data Grid

📷 **Screenshot**

---

### 🏢 Department Management

* Add Department
* Edit Department
* Delete Department
* Department Status
* Search
* Pagination


---

### 📅 Attendance Management

* Daily Attendance
* Present / Absent / Leave Status
* Employee-wise Attendance
* Search
* Pagination
* Responsive Table



---

### 🌴 Leave Management

* Apply Leave
* Approve / Reject Leave
* Leave Types
* Employee Selection
* Search
* Status Filter
* Pagination



---

### 💰 Payroll Management

* Generate Payroll
* Employee Dropdown
* Auto Salary Calculation
* Bonus
* Deduction
* Net Salary Calculation
* Payroll Status
* Search
* Pagination

---

### 📊 Dashboard

* Employee Statistics
* Attendance Statistics
* Leave Statistics
* Payroll Summary
* Department Overview

---

# 🛠 Technology Stack

## Frontend

* React 19
* TypeScript
* Vite
* Material UI (MUI)
* Redux Toolkit
* RTK Query
* React Router
* React Hook Form
* Zod
* Axios

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* REST API

---

# 📂 Project Structure

```text
ERP/
│
├── erp-frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── features/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── store/
│   │   ├── theme/
│   │   └── utils/
│
├── erp-backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.ts
│
└── screenshots/
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

---

## Frontend

```bash
cd erp-frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## Backend

```bash
cd erp-backend
npm install
npm run dev
```

Runs on:

```
http://localhost:5000
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend project.

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

---

# 📸 Application Screenshots

## Login

![Login](./screenshots/login.png)

---

## Dashboard

![Dashboard](./screenshots/dashboard.png)

---

## Employee Management

![Employees](./screenshots/employees.png)

---

## Department Management

![Departments](./screenshots/departments.png)

---

## Attendance

![Attendance](./screenshots/attendance.png)

---

## Leave

![Leave](./screenshots/leave.png)

---

## Payroll

![Payroll](./screenshots/payroll.png)

---

# 🚀 Future Enhancements

* Role & Permission Management
* Email Notifications
* Report Generation
* Inventory Module
* Asset Management
* Project Management
* Analytics Dashboard
* Charts & Graphs
* Dark Mode
* Multi-language Support
* Mobile Application

---

# 📈 Highlights

* Clean Architecture
* Modular Folder Structure
* RESTful APIs
* Responsive UI
* TypeScript Support
* Secure Authentication
* Export to CSV & PDF
* Form Validation with Zod
* Optimized State Management using Redux Toolkit & RTK Query

---

# 👨‍💻 Author

Full Stack MERN Developer

GitHub: https://github.com/Shankyking25
---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Feedback and contributions are always welcome.

---

# 📄 License

This project is licensed under the MIT License.
