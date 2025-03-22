📄 README.md (Backend)
markdown
Copy
Edit
# 🛠️ Form Builder Backend

This is the backend for the **Form Builder** app, responsible for:
- Creating forms
- Editing form structure
- Submitting form responses
- Retrieving forms and their submissions
- Deleting forms

---

## 🔧 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **dotenv**

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Raj2raaz/FormBuilder_Backend
cd form-builder-backend
```
2. Install dependencies
```bash

npm install
```
3. Create .env file
In the root of your backend project, create a .env file and add:


.env

```
PORT=5000
MONGO_URI=your_mongo_connection_string
```
Replace your_mongo_connection_string with your actual MongoDB URI.

▶️ Run the server
```bash

node src\server.js
```
Server will run on http://localhost:5000 (or as defined in .env)
