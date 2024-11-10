// config/db.js
const { Sequelize } = require("sequelize");

// Use DATABASE_URL if available (for Render, we typically use this)
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false, // Disable logging for cleaner output (optional)
});

// Function to connect to the database
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sequelize, connectDB };
