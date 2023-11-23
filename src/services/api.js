import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-api-dqv0.onrender.com"
});