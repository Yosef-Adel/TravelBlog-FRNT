import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1/", // Use the correct protocol (http or https)

  timeout: 10000, // Set a reasonable timeout value
});

export default instance;
