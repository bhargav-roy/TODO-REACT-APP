const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db"); // Import the database connection

const Task = db.sequelize.define(
  "Task",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Optionally, you can add associations if needed
// Task.belongsTo(User); // Example if Task has a User association

module.exports = Task;
