// src/components/TaskItem.js
import React, { useState } from "react";

const TaskItem = ({ task, editTask, deleteTask, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing && newText.trim()) {
      editTask(task.id, newText);
    }
  };

  return (
    <div style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{task.text}</span>
      )}
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? "Unmark" : "Complete"}
      </button>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
