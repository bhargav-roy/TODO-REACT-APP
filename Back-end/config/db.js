const Sequelize = require("sequelize");

// Use DATABASE_URL if available (for Render, we typically use this)
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false, // Disable logging for cleaner output (optional)
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
