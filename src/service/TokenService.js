import axios from "axios";

const FRONT_TOKEN_KEY = "AuthorizationFront";

const TokenService = {
  getToken() {
    return localStorage.getItem(FRONT_TOKEN_KEY);
  },
  saveToken(token) {
    localStorage.setItem(FRONT_TOKEN_KEY, token);
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  },

  removeToken() {
    localStorage.removeItem(FRONT_TOKEN_KEY);
    localStorage.clear();
  },
};

export default TokenService;
