// models/task.js
const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db"); // Import the database connection

const Task = sequelize.define(
  "Task",
  {
    // Define the task model schema
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
    // Additional model options, if needed
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

module.exports = Task;
