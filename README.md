# 🌍 Real-time Location Tracker

[![Made with Socket.IO](https://img.shields.io/badge/Socket.IO-v4.7.2-blue?logo=socket.io&logoColor=white)](https://socket.io)
[![Leaflet Map](https://img.shields.io/badge/Leaflet-Map-green?logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![Live Geolocation](https://img.shields.io/badge/Live-Geolocation-orange)](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

A real-time device location tracker built using **Node.js**, **Socket.IO**, and **Leaflet.js**. This project uses the browser's geolocation API to emit the live coordinates of a user and displays them on a shared interactive map.

---

## 🎥 Preview

![Live Location Tracker Demo](https://miro.medium.com/v2/resize:fit:828/format:webp/1*033cnsS3JIBh_Z847oqFSw.gif)

> 📌 Tip: To see real-time tracking, open the app in two tabs or devices and allow location access.

---

## 🔧 Features

- 📍 Tracks live device location
- 🌐 Real-time updates via WebSocket
- 🗺️ Interactive map with markers
- 👥 Removes markers when user disconnects
- ⚡ Minimal, fast, and easy to set up

---

## 🛠️ Tech Stack

| Tech       | Description                          |
|------------|--------------------------------------|
| **Node.js** | Backend server                      |
| **Socket.IO** | Real-time communication           |
| **Leaflet.js** | Interactive maps and markers     |
| **EJS** | Templating engine                       |
| **Geolocation API** | Gets current coordinates    |

---

## 🚀 Getting Started

### 1. Clone the repo

git clone https://github.com/your-username/location-tracker.git
cd location-tracker

---

### 2. Install dependencies
npm install

---

### 3. Start the server
node app.js

---

### 4. Open in browser
http://localhost:5000

---
###  Project Structure 
Real-Time-Location-Tracker/
│
├── public/                   # Static assets served to the browser
│   ├── js/
│   │   └── main.js           # Frontend JavaScript (Socket.IO + Leaflet logic)
│   └── css/
│       └── style.css         # Custom styling
│
├── views/
│   └── index.ejs             # Main HTML view rendered by Express
│
├── .gitignore                # Ignore node_modules, .env, etc.
├── package.json              # Node.js project metadata
├── server.js                 # Main backend server (Express + Socket.IO)
└── README.md                 # Project documentation


