import axios from "axios";

export default axios.create({
  baseURL: "https://yassine-yousfi.vercel.app/api",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
