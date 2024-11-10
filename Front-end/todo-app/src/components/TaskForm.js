import React, { useState } from "react";
import axios from "axios";

const TaskForm = () => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      try {
        // Send the new task to the backend API
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/tasks`,
          {
            title: input,
            description: "",
            isCompleted: false,
          }
        );

        // Optionally, handle success and reset input
        console.log("Task added:", response.data);
        setInput(""); // Clear the input after adding the task
      } catch (error) {
        // Handle error (e.g., show an error message to the user)
        console.error("Error adding task:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
