import axios from "axios";

// Custom Instance
const customFetch = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
  headers: {
    Accept: "application/json",
  },
});

export default customFetch;
