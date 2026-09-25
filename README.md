# MGM College & Alumni Portal - Full Stack Application

This repository contains the complete full-stack web application for the Mahatma Gandhi Memorial (MGM) College & Alumni Portal.

---

## 📁 Project Structure

```
├── client/          # Vite + React + TailwindCSS Frontend
│   ├── src/         # React Components, Pages, Academics, Activities, etc.
│   ├── public/      # Static Assets (Images, PDFs, Documents)
│   └── package.json
│
├── server/          # Node.js + Express + MongoDB Backend API
│   ├── index.js     # Unified Backend Server with Auth & Collections
│   ├── routes/      # Express API Routes (Faculty, Department, Users)
│   ├── models/      # Mongoose Models
│   ├── .env         # Environment Configuration (Port 5001, Admin Auth, Mongo)
│   └── package.json
```

---

## 🚀 Running the Project

### 1. Start the Backend Server
```powershell
cd server
npm install
npm start
```
* The API runs on `http://localhost:5001`.
* Default Admin Login credentials:
  * **Admin ID:** `admin`
  * **Password:** `admin123`

### 2. Start the Frontend Client
```powershell
cd client
npm install
npm run dev
```
* Opens the Vite development server (typically on `http://localhost:5173`).
* Requests to `/api` are automatically proxied to `http://localhost:5001`.

---

## 🛠️ Verification & Build Commands

- **Client Lint Check:**
  ```powershell
  cd client
  npm run lint
  ```
- **Client Production Build:**
  ```powershell
  cd client
  npm run build
  ```
