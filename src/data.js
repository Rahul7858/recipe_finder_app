import axios from "axios";

export const api = axios.create({
  baseURL: "https://forkify-api.herokuapp.com/api/v2",
});