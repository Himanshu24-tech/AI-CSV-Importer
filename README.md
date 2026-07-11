# 🤖 AI CSV Importer

An AI-inspired CSV Importer built using **React, Vite, Node.js, and Express.js**. The application allows users to upload CSV files, preview data, automatically map CSV columns to CRM fields, manually adjust mappings, and import data through an intuitive and responsive interface.

---

## 🚀 Features

- 📂 Drag & Drop CSV Upload
- 📄 CSV Data Preview
- 🤖 Automatic Column Mapping
- ✏️ Manual Field Mapping
- 📥 Import CSV Data
- 📜 Import History (Local Storage)
- 🎨 Responsive User Interface
- ⚡ Fast React + Vite Frontend
- 🌐 Express.js Backend

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- PapaParse
- React Dropzone
- Axios
- React Hot Toast
- Lucide React

### Backend
- Node.js
- Express.js
- CORS

### Storage
- Local Storage (Current Version)
- MongoDB Atlas (Planned)

---

## 📁 Project Structure

```
AI-CSV-Importer
│
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── UploadBox.jsx
│   │   │   ├── CSVPreview.jsx
│   │   │   ├── MappingTable.jsx
│   │   │   ├── ImportButton.jsx
│   │   │   └── History.jsx
│   │   │
│   │   ├── pages
│   │   │   └── Home.jsx
│   │   │
│   │   ├── utils
│   │   │   └── columnMapper.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/Himanshu24-tech/AI-CSV-Importer.git
```

### Navigate to Project

```bash
cd AI-CSV-Importer
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Start Frontend

```bash
npm run dev
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

### Start Backend

```bash
npm run dev
```

---

## 📋 Workflow

1. Upload a CSV file.
2. Preview uploaded CSV data.
3. Automatically map CSV columns to CRM fields.
4. Modify mappings manually if required.
5. Import the transformed data.
6. View imported records in Import History.

---

## 📸 Screenshots

### Home Page
- CSV Upload Interface
- Drag & Drop Support
  <img width="1366" height="768" alt="Screenshot (134)" src="https://github.com/user-attachments/assets/a1ef0401-7b99-4d77-8f55-bf4346db3cee" />


### CSV Preview
- Displays uploaded CSV records
- <img width="1366" height="768" alt="Screenshot (137)" src="https://github.com/user-attachments/assets/70ea61c8-e366-47b4-b996-15db29e42713" />

### Column Mapping
- Automatic field suggestions
- Manual mapping support
- <img width="1366" height="768" alt="Screenshot (139)" src="https://github.com/user-attachments/assets/f2803bae-84b1-4825-92ff-ddba6ed83477" />


### Import History
- Displays previously imported records


---

## 🌟 Future Enhancements

- Gemini AI Integration for intelligent field mapping
- MongoDB Atlas Database Integration
- User Authentication
- Duplicate Record Detection
- Dashboard & Analytics
- Export Data to Excel/PDF
- Role-Based Access Control
- REST API Documentation

---

## 🎯 Learning Outcomes

Through this project, I gained experience in:

- React Component Architecture
- CSV File Processing
- Data Mapping Logic
- State Management
- Responsive UI Design
- REST API Development
- Git & GitHub Workflow
- Frontend Deployment using Vercel

---

## 👨‍💻 Author

**Himanshu Pardhi**

- 🎓 B.Tech in Artificial Intelligence
- 💻 Passionate about AI, Full Stack Development, and Data Analytics

GitHub: https://github.com/Himanshu24-tech

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
