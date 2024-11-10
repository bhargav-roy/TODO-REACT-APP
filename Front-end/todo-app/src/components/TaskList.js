// src/components/TaskList.js
import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import axios from "../axiosInstance";
import "./TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend on initial render
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/tasks`
        );
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  // Add a new task
  const addTask = async (taskText) => {
    try {
      const newTask = { title: taskText, isCompleted: false };
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/tasks`,
        newTask
      );
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Edit an existing task
  const editTask = async (id, newText) => {
    try {
      const updatedTask = { title: newText };
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/tasks/${id}`,
        updatedTask
      );
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, title: response.data.title } : task
        )
      );
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Toggle task completion
  const toggleComplete = async (id) => {
    try {
      const taskToToggle = tasks.find((task) => task.id === id);
      const updatedStatus = { isCompleted: !taskToToggle.isCompleted };
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/tasks/${id}/complete`,
        updatedStatus
      );
      setTasks(
        tasks.map((task) =>
          task.id === id
            ? { ...task, isCompleted: response.data.isCompleted }
            : task
        )
      );
    } catch (error) {
      console.error("Error toggling task completion:", error);
    }
  };

  return (
    <div>
      <h1>TODO List</h1>
      <TaskForm addTask={addTask} />
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
