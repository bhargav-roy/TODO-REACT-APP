// server.js
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db"); // Correct import of connectDB
const taskRoutes = require("./routes/taskroutes");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());
app.use(cors()); // Enable Cross-Origin Requests

// Connect to the database
connectDB(); // Call the connectDB function

// Use the taskRoutes
app.use("/api", taskRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
