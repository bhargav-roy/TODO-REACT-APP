// src/components/TaskItem.js
import React, { useState } from "react";
import axios from "../axiosInstance";

const TaskItem = ({ task, editTask, deleteTask, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.title);

  // Handle the edit toggle
  const handleEdit = async () => {
    setIsEditing(!isEditing);

    // If it's not editing, and the text is valid, send the update to the backend
    if (isEditing && newText.trim()) {
      try {
        // Call edit task function passed from parent
        await editTask(task.id, newText);
      } catch (error) {
        console.error("Error updating task:", error);
      }
    }
  };

  // Handle toggling completion
  const handleToggleComplete = async () => {
    try {
      await toggleComplete(task.id); // Toggle the task completion status on the backend
    } catch (error) {
      console.error("Error toggling task completion:", error);
    }
  };

  // Handle task deletion
  const handleDelete = async () => {
    try {
      await deleteTask(task.id); // Delete task from the backend
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{task.title}</span>
      )}
      <button onClick={handleToggleComplete}>
        {task.isCompleted ? "Unmark" : "Complete"}
      </button>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
