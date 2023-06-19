import axios from "axios";

const http = axios.create({
  baseURL: "https://dummyjson.com/docs",
});

export default http;
