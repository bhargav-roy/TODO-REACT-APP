import axios from "axios";

// You can set a default base URL for your API here
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api", // Default to local if not set in .env
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
