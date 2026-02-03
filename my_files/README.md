# Fabric ERP System

A professional Full-Stack Enterprise Resource Planning (ERP) solution designed for textile industries to digitize warehouse operations and inventory management.

## 🛠 Implementation Technologies
This project was developed according to the official specifications using the following stack:
- **Frontend:** HTML, CSS, Bootstrap, JavaScript, React.
- **Backend:** Node.js, Express.js, EJS (for dynamic reporting).
- **Database:** MongoDB (Local Instance): NoSQL database for flexible data storage.

## Key Features
- **Smart Inventory Management:** Complete CRUD (Create, Read, Update, Delete) operations with advanced category filtering.
- **Dynamic Analytics:** Real-time warehouse health monitoring and distribution charts via Chart.js.
- **System Notifications:** Instant updates for every product addition, modification, or deletion.
- **Security & Authentication:** User authentication powered by JWT (JSON Web Tokens) and Bcrypt password hashing.
- **Automated Reporting:** Secure, PDF-ready inventory reports generated via EJS templates.

## Default Credentials
To access the system immediately after importing the database, use the following administrator account:
- **Email:** `default@test.com`
- **Password:** `98765432`

---

## Installation & Setup

### 1. Prerequisites
- **Node.js** installed on your machine.
- **MongoDB Community Server** running locally on default port `27017`.


### 1. Backend Configuration

1. Open your terminal in the `backend` folder.
2. Install all required dependencies:
    ```bash
   npm install express mongoose cors dotenv multer jsonwebtoken bcrypt nodemailer ejs
3. Create a `.env` file and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=FabricErpSecretKey2026!
3. Run the following command:
- node server.js

### 2. Frontend Configuration
1. Open your terminal in the `frontend` folder.
2. Install all required dependencies (including Charts and Toasts):
    ```bash
    npm install bootstrap react-router-dom react-toastify chart.js react-chartjs-2
3. Verify that src/config.js points to your backend:
- export const API_URL = "http://localhost:5000"
4. Run the following command:
- npm start

### Developer: Drosos Katsimpras | 2026

- This project was created for educational purposes in the context of Full Stack Web Development.
