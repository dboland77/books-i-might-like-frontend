import axios from "axios";
import authHeader from "./auth-header";

const getPublicContent = () => {
  return axios.get(process.env.REACT_APP_API_URL);
};

const getBooks = () => {
  return axios.get(process.env.REACT_APP_API_URL + "main", {
    headers: authHeader(),
  });
};
export { getBooks, getPublicContent };
