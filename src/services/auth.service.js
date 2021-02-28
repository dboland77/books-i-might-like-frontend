import axios from "axios";

const register = (username, password, password_repeat) => {
  return axios.post(process.env.REACT_APP_API_URL + "sign-up", {
    username,
    password,
    password_repeat,
  });
};

const login = (username, password) => {
  return axios
    .post(process.env.REACT_APP_API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export {
  register,
  login,
  logout,
  getCurrentUser,
};
