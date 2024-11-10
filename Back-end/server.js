// server.js
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");
const taskRoutes = require("./routes/taskroutes"); // Import your task routes

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());
app.use(cors()); // Enable Cross-Origin Requests

// Connect to the database
connectDB();

// Use the taskRoutes
app.use("/api", taskRoutes); // Mount routes under '/api' path

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
