# YouTube Subscribers Backend API - Documentation

## 📌 Project Overview
The **YouTube Subscribers Backend API** is a RESTful API built using **Node.js, Express.js, and MongoDB**. It allows users to retrieve subscriber details stored in a **MongoDB database**.

## 🚀 Technologies Used
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for handling HTTP requests
- **MongoDB** - NoSQL database for storing subscriber data
- **Mongoose** - ODM for interacting with MongoDB

## 📂 Project Structure
```
|-- src/
    |-- models/
        |-- subscribers.js   # Mongoose schema for subscribers
    |-- createDatabase.js    # Script to populate database
    |-- index.js             # Server setup and MongoDB connection
    |-- app.js               # Express app handling routes and requests
|-- package.json             # Project dependencies
```

## ⚙️ Installation and Setup (Local Environment)
### 1️⃣ Install Node.js and MongoDB
Ensure you have **Node.js** and **MongoDB** installed on your system:
- Download Node.js from [nodejs.org](https://nodejs.org/)
- Download MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community)

### 2️⃣ Clone the Repository
Run the following command in your terminal:
```bash
git clone https://github.com/your-username/youtube-subscribers-backend.git
cd youtube-subscribers-backend
```

### 3️⃣ Install Dependencies
Run the following command in the project directory:
```bash
npm install
```

### 4️⃣ Start MongoDB Locally
Ensure MongoDB is running on your system:
```bash
brew services start mongodb-community@5.0   # For macOS
```
OR manually start MongoDB using:
```bash
mongod --dbpath=/path/to/data/db
```

### 5️⃣ Populate the Database
Run the script to create the database:
```bash
node src/createDatabase.js
```

### 6️⃣ Start the Server
Run:
```bash
node src/index.js
```
The server will start on `http://localhost:3000/`.

## 🌐 API Endpoints
### **1️⃣ Get All Subscribers**
- **Endpoint:** `GET /subscribers`
- **Description:** Fetches an array of all subscribers.
- **Response Format:**
```json
[
  {
    "_id": "60a6b7f4c5d4b96a1c8a1e93",
    "name": "John Doe",
    "subscribedChannel": "Tech World",
    "subscribedDate": "2023-07-21T18:25:43.511Z"
  }
]
```

### **2️⃣ Get Subscriber Names and Channels**
- **Endpoint:** `GET /subscribers/names`
- **Description:** Fetches an array of subscribers with only `name` and `subscribedChannel`.
- **Response Format:**
```json
[
  {
    "name": "John Doe",
    "subscribedChannel": "Tech World"
  }
]
```

### **3️⃣ Get Subscriber by ID**
- **Endpoint:** `GET /subscribers/:id`
- **Description:** Fetches a specific subscriber by ID.
- **Response Format:**
```json
{
  "_id": "60a6b7f4c5d4b96a1c8a1e93",
  "name": "John Doe",
  "subscribedChannel": "Tech World",
  "subscribedDate": "2023-07-21T18:25:43.511Z"
}
```
- **Error Response:**
```json
{
  "message": "Subscriber not found"
}
```
